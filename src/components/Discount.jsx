import { discount } from "../constants";

function Discount() {
  return (
    <div className={`w-full text-center mt-6 p-3 bg-primary text-white sm:text-[26px] text-[20px] rounded-lg ${discount.case ? "" : "hidden"}`}>
      <h4>There is {discount.value}% Discount For All Products</h4>
    </div>
  );
}

export default Discount;
