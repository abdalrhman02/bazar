import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getAuth } from 'firebase/auth';

function ProductAdd({product}) {

    const [username, setUsername] = useState('');
    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            setUsername(user.displayName || user.email);
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
                                <p>{product.sellerTown}</p>
                            </div>

                            <div className="user">
                                <img src={require('../Images/icons/user.png')} />
                                <p>{product.sellerName}</p>
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