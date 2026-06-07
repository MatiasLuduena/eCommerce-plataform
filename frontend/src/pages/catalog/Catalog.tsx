import { Link } from "react-router-dom";

const Catalog = () => {
  return (
    <div>
      <p>filter</p>
      <p>products list</p>
      <Link to="/product/1">
        <p>product one</p>
      </Link>
      <Link to="/product/2">
        <p>product two</p>
      </Link>
      <Link to="/product/3">
        <p>product three</p>
      </Link>
    </div>
  );
};

export default Catalog;
