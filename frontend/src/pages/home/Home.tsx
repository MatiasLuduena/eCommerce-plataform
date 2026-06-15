import { Link } from "react-router-dom";

// data (importar unicamente datos necesarios)
import { data } from "../../data.ts";

const Hero = () => {
  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <p>Banner</p>
      <p>List of Featured Products</p>
      <h3>Categories</h3>
      <div>
        <Link to="/catalog/men">
          <p>Men</p>
        </Link>
        <Link to="/catalog/women">
          <p>Women</p>
        </Link>
        <h5>New Products</h5>
        {data.products
          .filter((product) => product.newProducts)
          .map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <p>{product.name}</p>
            </Link>
          ))}
        <h5>Most Sold</h5>
        {data.products
          .filter((product) => product.mostSold)
          .map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <p>{product.name}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Hero;
