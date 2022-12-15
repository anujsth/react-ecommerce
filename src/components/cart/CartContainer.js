import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
// import { clearCart } from "../../features/cart/cartSlice";
// import Modal from "./Modal";
import { openModal } from "../../features/modal/modalSlice";
import KhaltiCheckout from "khalti-checkout-web";
import config from "../khalti/khaltiConfig";

// import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  let checkout = new KhaltiCheckout(config);
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  if (amount < 1) {
    return (
      <section className="cart">
        {/* {isOpen && <Modal />} */}
        <header>
          <h2>Your Cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>Rs.{total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
        <button
          className="btn buy-btn"
          onClick={() => checkout.show({ amount: `${total}00` })}
        >
          Buy Now
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
