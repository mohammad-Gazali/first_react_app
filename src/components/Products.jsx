import Product from "./Product";
import { products } from "../constants";
import { styles } from "../style";

const Products = () => {
  return (
    <div className={`${styles.flexCenter} flex-wrap gap-5 px-4 py-10 ${styles.testBorder} my-6`}>
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
    </div>
  )
}

export default Products