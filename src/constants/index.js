import { test } from "../assets";

const products = [
  {
    id: "product-1",
    name: "Dragon Headphone",
    price: 35,
    image: test,
  },

  {
    id: "product-2",
    name: "iPhone 14",
    price: 900,
    image: test,
  },

  {
    id: "product-3",
    name: "Cpu SnapDragon",
    price: 400,
    image: test,
  },

  {
    id: "product-4",
    name: "Playstation 5",
    price: 500,
    image: test,
  },

  {
    id: "product-5",
    name: "Xbox-One",
    price: 450,
    image: test,
  },
];

const discount = {
    case: true,
    value: 10
}

const user = {
    name: "Mohammed",
    age: 18,
    job: "Web Developer",
    image: null,
}

export { products, discount, user };
