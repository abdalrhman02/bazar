import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fst } from '../firebaseconfig';
import { doc, getDoc } from 'firebase/firestore';

// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function ProductPage() {
    
    let sellerContactWindow = useRef();
    let sellerContactButton = () => {
        sellerContactWindow.current.classList.remove('disNone');
    }
    let closeWindowButton = () => {
        sellerContactWindow.current.classList.add('disNone');
    }


    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productRef = doc(fst, "products", productId);
                const productSnapshot = await getDoc(productRef);
                if (productSnapshot.exists()) {
                    setProduct(productSnapshot.data());
                } else {
                    console.log("No such product!");
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            }
            setLoading(false);
        };

        fetchProduct();
    }, [productId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!product) {
        return <p>Product not found</p>;
    }


    return (
        <>
            <Header />

            <div className='sellerContactWindow disNone' ref={sellerContactWindow}>
                <div className='sellerContactContent'>

                    <div className='closeWindow' onClick={closeWindowButton}>
                        <img src={require('../Images/icons/plus.png')} />
                    </div>

                    <div className='text'>
                        <h2>تواصل مع البائع</h2>
                        <p>رقم الهاتف: {product.sellerNumber}</p>
                    </div>

                    <img src={require('../Images/store/call-seller.png')} className='image' />
                    <img src={require('../Images/Logo/BazarLogoWhite.png')} className='logo' />

                    <div className='background'></div>
                </div>
            </div>

            <div className="product">
                <div className="productDetails">
                    <div className="productInfo">
                        <p className="name">{product.prName}</p>
                        <div className="price">
                            <img src={require('../Images/icons/shekel.png')} alt="currency" />
                            <p>{product.prPrice}</p>
                        </div>
                        <div className="town">
                            <img src={require('../Images/icons/location.png')} alt="location" />
                            <p>{product.sellerTown}</p>
                        </div>
                        <div className="seller">
                            <img src={require('../Images/icons/user.png')} alt="seller" />
                            <p>{product.sellerName}</p>
                        </div>

                        <p className="date">{product.prDate}</p>
                    </div>

                    <div className="productImages">
                        <div className="description">
                            <p>حالة المنتج: {product.prStatus}</p>
                            <br></br>
                            <p>{product.prDescription}</p>
                        </div>

                        <div className="images">
                            {product.prImg1 && <img src={product.prImg1} alt="Product 1" />}
                            {product.prImg2 && <img src={product.prImg2} alt="Product 2" />}
                            {product.prImg3 && <img src={product.prImg3} alt="Product 3" />}
                            {product.prImg4 && <img src={product.prImg4} alt="Product 4" />}
                        </div>
                    </div>
                </div>

                <div className="buy">
                    <button className='btn' onClick={sellerContactButton}>تواصل مع البائع</button>

                    <div className="more">
                        <p>مشاركة</p>
                        <p>|</p>
                        <p>ابلاغ</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductPage;
