
function ProductAdd() {
    return (
        <>
            <div className="productAdd">
                <div className="productInfo">
                    <div className="name-price">
                        <p className="name">اكسبوكس360 مع لعبتين |</p>
                        <div className="price">
                            <img src={require('../Images/icons/shekel.png')} />
                            <p>500</p>
                        </div>
                    </div>

                    <div>
                        <div className="town">
                            <img src={require('../Images/icons/location.png')} />
                            <p>القدس</p>
                        </div>

                        <div className="user">
                            <img src={require('../Images/icons/user.png')} />
                            <p>اسم البائع هنا</p>
                        </div>
                    </div>
                </div>
                
                <div className="productImage">
                    <img src={require("../Images/xbox360.jpeg")} />
                </div>
            </div>
        </>
    )
}

export default ProductAdd;