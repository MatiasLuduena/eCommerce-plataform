import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import type { RootState } from "../../store/store";

import { removeFromCart, clearCart } from "../../store/cartSlice";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <p>First, solicit your session</p>
      <div>
        <p>Products in the cart</p>
        <button onClick={() => dispatch(clearCart())}>Clear cart</button>
        {cart.map((item) => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <h4>{item.quantity}</h4>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              remove
            </button>
          </div>
        ))}
      </div>
      <p>payment and delivery options</p>
      <Link to="/checkout">
        <p>Proceed to Checkout</p>
      </Link>
    </div>
  );
};

export default Cart;
