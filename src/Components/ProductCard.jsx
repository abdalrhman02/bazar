function ProductCard({prImgSrc, prName, prPrice, prDate}) {
    return (
        <div className="ad">
            <img src={require({prImgSrc})} />
            <h4 className="name">{prName}</h4>
            <h5 className="price">{prPrice}</h5>
            <h6 className="date">{prDate}</h6>
        </div>
    )
}

export default ProductCard;