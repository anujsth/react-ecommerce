import React from "react";
import { ChevronDown, ChevronUp } from "../../icons";
import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../../features/cart/cartSlice";

const CartItem = ({ id, img, title, desc, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>

        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem({ id }));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          // onClick={() => {
          //   dispatch(increase({ id }));
          // }}
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              return dispatch(removeItem({ id }));
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
