import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import dummyProducts from "../../resources/dummyProducts";

const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Get heated!</h2>
      <ul>
        {dummyProducts.map((item) =>
         ( <ProductItem
          title={item.title}
          price={item.price}
          description={item.description}
          id = {item.id}
          key={item.id}
        />)
        )}
      </ul>
    </section>
  );
};

export default Products;
