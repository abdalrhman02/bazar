import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { fst } from '../firebaseconfig';

function ProductAdd({product}) {

    const [sellerUsername, setSellerUsername] = useState('');
    const [sellerTown, setSellerTown] = useState('');
    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            setSellerUsername(user.displayName);
            
            const fetchUserTown = async () => {
                try {
                    const userDocRef = doc(fst, 'users', user.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        setSellerTown(userDoc.data().town || '');
                    }
                } catch (error) {
                    console.error('Error fetching user town:', error);
                }
            };

            fetchUserTown();
        }
    }, []);

    
    return (
        <>
            <div className="productAdd">
                <Link to={`/ProductPage/${product.id}`}>
                    <div className="productInfo">
                        <div className="name-price">
                            <p className="name">{product.prName}</p>
                            <div className="price">
                                <img src={require('../Images/icons/shekel.png')} />
                                <p>{product.prPrice}</p>
                            </div>
                        </div>

                        <div>
                            <div className="town">
                                <img src={require('../Images/icons/location.png')} />
                                <p>{sellerTown}</p>
                            </div>

                            <div className="user">
                                <img src={require('../Images/icons/user.png')} />
                                <p>{sellerUsername}</p>
                            </div>
                        </div>
                    </div>
                        
                        <img src={product.prImg1} className='product-img' />
                </Link>
            </div>
        </>
    )
}

export default ProductAdd;