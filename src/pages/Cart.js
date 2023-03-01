import * as React from "react";
import { useSelector } from "react-redux";

import CartItem from "../components/CartItem";

export default function ImgMediaCard() {
  const cartItems = useSelector((state) => state.cart);

  const total = cartItems.reduce((p, c) => p + c.price, 0);

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>

      <div className="bill-section">
        <h1>Total Item {cartItems.length} : </h1>
        <h1>Total Amount : {total} $</h1>
        <button className="pay-btn">Pay Now</button>
      </div>
    </div>
  );
}
