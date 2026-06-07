import { Link } from "react-router-dom";

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
        <Link to="/catalog/children">
          <p>Children</p>
        </Link>
        <Link to="/catalog/new-products">
          <p>New products</p>
        </Link>
        <Link to="/catalog/most-sold">
          <p>Most sold</p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
