import { styles } from "../style";
import { discount } from "../constants";
import { BsFillCartFill, BsFillInfoCircleFill } from "react-icons/bs";
import Button from "./Button";

function Product(props) {

  const discountCalc = (price, percent) => {
    return price - price * (percent / 100)
  }

  return (
    <div
      className={`${styles.flexCenter} flex-col relative max-w-[210px] bg-gray bg-opacity-[0.15] p-4 rounded-lg border-primary border-opacity-50 border-2`}
    >
      <h6 className="font-bold text-center mb-2 text-dark">{props.name}</h6>
      <img
        className="w-[168px] h-[168px] object-contain rounded-lg"
        src={props.image}
        alt={props.name}
      />
      <span className="font-bold">
        Price:
        <span className="text-secondary-dark ml-1">
          {discount.case ? discountCalc(props.price, discount.value) : props.price}$
        </span>
        <del className={`text-gray font-normal ml-3 ${discount.case ? "" : "hidden"}`}>{props.price}$</del>
      </span>
      <Button text="Add To Cart" icon={<BsFillCartFill className="w-full h-full"/>} styles="mt-5" />
      <Button text="More Details" icon={<BsFillInfoCircleFill className="w-full h-full"/>} styles="mt-5" />
    </div>
  );
}

export default Product;
