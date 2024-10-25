import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { auth, storage, fst } from '../firebaseconfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { updateDoc, doc, getDoc, deleteDoc } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';

// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function ProfilePage() {
    const [user, setUser] = useState(null);
    const [userProducts, setUserProducts] = useState([]);
    const [profileImage, setProfileImage] = useState(null); 
    const [uploading, setUploading] = useState(false);
    const [userInfo, setUserInfo] = useState({ username: '', town: '', signupDate: '' });
    const fileInputRef = useRef(null); 

    useEffect(() => {
        const fetchUserProducts = async () => {
            try {
                const currentUser = auth.currentUser;
                if (currentUser) {
                    setUser(currentUser);
                    
                    setProfileImage(currentUser.photoURL || '../Images/default-user-image.png');

                    const userDocRef = doc(fst, 'users', currentUser.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        setUserProducts(userDoc.data().userProducts || []);
                        setUserInfo({
                            username: userDoc.data().username || '',
                            town: userDoc.data().town || '',
                            signupDate: userDoc.data().signupDate ? formatDate(userDoc.data().signupDate.toDate()) : 'N/A',
                        });
                    }
                }
            } catch (error) {
                console.error('Error fetching user products:', error.message);
            }
        };

        fetchUserProducts();
    }, []);

    const formatDate = (date) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    const handleDivClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file && user) {
            setUploading(true);
            const storageRef = ref(storage, `profilePictures/${user.uid}`);
            try {
                await uploadBytes(storageRef, file);
                
                const imageUrl = await getDownloadURL(storageRef);
                await updateProfile(user, {
                    photoURL: imageUrl
                });
                
                const userDocRef = doc(fst, 'users', user.uid);
                await updateDoc(userDocRef, {
                    profileImage: imageUrl
                });
                
                setProfileImage(imageUrl);
                setUploading(false);
            } catch (error) {
                console.error('Error uploading image: ', error);
                setUploading(false);
            }
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            // Delete from main products collection
            const productDocRef = doc(fst, 'products', productId);
            await deleteDoc(productDocRef);

            // Remove from user's products list
            const userDocRef = doc(fst, 'users', auth.currentUser.uid);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                const updatedUserProducts = userDoc.data().userProducts.filter((product) => product.productId !== productId);
                await updateDoc(userDocRef, { userProducts: updatedUserProducts });
                setUserProducts(updatedUserProducts);
            }

            alert('تم حذف المنتج بنجاح');
        } catch (error) {
            console.error('Error deleting product:', error.message);
        }
    };

    return (
        <>
            <Header />

            <div className='profilePage'>
                {!user ? (
                    <div className='noUser'>
                        <p>Please log in to view your profile.</p>
                    </div>
                ) : (
                    <div className='container'>

                        <div className='links'>
                            <ul>
                                <li>الملف الشخصي</li>
                            </ul>
                        </div>

                        <div>
                            <div className='userDetails'>
                                <div className='profile'>
                                    <div>
                                        <div className="profileImage" onClick={handleDivClick}
                                            style={{ backgroundImage: `url(${profileImage})` }}
                                        ></div>
                                        <input type="file" accept="image/*" onChange={handleImageChange} 
                                            style={{ display: 'none' }}
                                            ref={fileInputRef}
                                            disabled={uploading}
                                        />
                                        {uploading && <p>Uploading...</p>}
                                    </div>

                                    <div className='profileInfo'>
                                        <h2 className='userName'>{userInfo.username}</h2>
                                        <div className='more'>
                                            <p>البلد: {userInfo.town}</p>
                                            |
                                            <p>تاريخ الانضمام: {userInfo.signupDate}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='currentAdds'>
                                    {userProducts.length === 0 ? (
                                        <p>لا يوجد منتجات للبيع لدى البائع</p>
                                    ) : (
                                        <>
                                            <h3>منتجات معروضة للبيع:</h3>
                                            <ul>
                                                {userProducts.map((product) => (
                                                    <li key={product.productId}>
                                                        <img src={product.prImg1} alt={product.prName} />
                                                        <p>{product.prName}</p>
                                                        <p>₪{product.prPrice}</p>
                                                        <button className='btn' onClick={() => handleDeleteProduct(product.productId)}>حذف المنتج</button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
}

export default ProfilePage;
