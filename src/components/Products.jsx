import Product from "./Product";
import { products } from "../constants";
import { styles } from "../style";

const Products = () => {
  return (
    <section className={`${styles.flexCenter} flex-wrap gap-5 sm:px-4 py-10 my-6`}>
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
    </section>
  )
}

export default Products