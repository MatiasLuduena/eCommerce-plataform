import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <p>First, solicit your session</p>
      <p>cart items</p>
      <p>payment and delivery options</p>
      <Link to="/checkout">
        <p>Proceed to Checkout</p>
      </Link>
    </div>
  );
};

export default Cart;
