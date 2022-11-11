import React from "react";
import { styles } from "../style";

const Button = (props) => (
  <button
    className={`${styles.flexCenter} flex-wrap gap-1 px-4 py-2 rounded-lg bg-secondary text-[18px] text-white ${props.styles} transition-all duration-300 hover:bg-secondary-dark focus:shadow-button focus:bg-secondary`}
  >
    {props.text}
    <div className={`h-[26px] w-[26px] ${props.icon ? "" : "hidden"}`}>
      {props.icon}
    </div>
  </button>
);

export default Button;
