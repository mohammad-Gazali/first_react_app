import '../assets/css/components_style/Discount_style.css'

function Discount(props) {
    return (
        <div className='discount'>
            <h4>There is {props.value}% Discount For All Products</h4>
        </div>
    )
}

export default Discount