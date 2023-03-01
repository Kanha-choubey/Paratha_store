import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../store/CartSlice";

function CartItem({ cartItem }) {
  console.log(cartItem);
  const dispatch = useDispatch();
  const { img, title, price, id } = cartItem;

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <div className="cart-item">
        <img src={img} alt="" />
        <span>
          <h1>{title}</h1>
          <h3>Rate : {price}$</h3>
          <h3>Qty : 1</h3>
        </span>
        <button className="remove-btn" onClick={() => handleRemove(id)}>
          Remove Item
        </button>
      </div>
    </div>
  );
}

export default CartItem;
