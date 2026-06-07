import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate(-1)}>back</button>
      <Link to="/session">
        <p>login</p>
      </Link>
      <Link to="/session">
        <p>register</p>
      </Link>
      <Link to="/profile">
        <p>profile</p>
      </Link>
      <Link to="/dashboard">
        <p>dashboard</p>
      </Link>
      <Link to="/cart">
        <p>cart</p>
      </Link>
      <p>burger menu</p>
      <div>
        <p>categories</p>
        <p>more pages...</p>
      </div>
      <input type="text" placeholder="search..." />
      <hr />
    </nav>
  );
};

export default Navbar;
