import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { fst } from '../firebaseconfig';

function ProductAdd({ product }) {
    const [sellerUsername, setSellerUsername] = useState('');
    const [sellerTown, setSellerTown] = useState('');

    

    return (
        <div className="productAdd">
            <Link to={`/ProductPage/${product.id}`}>
                <div className="productInfo">
                    <div className="name-price">
                        <p className="name">{product.prName}</p>
                        <div className="price">
                            <img src={require('../Images/icons/shekel.png')} alt="Currency" />
                            <p>{product.prPrice}</p>
                        </div>
                    </div>
                    <div className="seller-details">
                        <div className="town">
                            <img src={require('../Images/icons/location.png')} alt="Location" />
                            <p>{product.sellerTown}</p>
                        </div>
                        <div className="user">
                            <img src={require('../Images/icons/user.png')} alt="User" />
                            <p>{product.sellerName}</p>
                        </div>
                    </div>
                </div>
                <img src={product.prImg1} className="product-img" alt="Product" />
            </Link>
        </div>
    );
}

export default ProductAdd;
