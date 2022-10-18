import '../assets/css/components_style/Product_style.css';
import image from '../assets/imgs/test_image.png'

function Product(props) {

    return (
        <div className="product">
            <h6 className="product-title">{props.name}</h6>
            <img className="product-image" src={image} alt="product"/>
            <span className="price-text">Price: <span className="price-value">{props.price}$</span>&nbsp;&nbsp;&nbsp;<del className="text-muted">{parseInt(props.price) + parseInt(parseInt(props.price) / 10 )}$</del></span>
            <button className="btn btn-warning">Add To Cart <i className="bi bi-cart-fill"></i></button>
        </div>
    )
}

export default Product
