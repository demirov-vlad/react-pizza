import React from "react";
import { Link } from "react-router-dom";

import cartEmptyImg from "../assets/img/empty-cart.png";

const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Cart is empty <span>😕</span>
      </h2>
      <p>
        Seems you are not choosing any pizza yet.
        <br />
        For ordering pizzas, please return to the main page.
      </p>
      <img src={cartEmptyImg} alt="Empty cart" />
      <Link to="/react-pizza" className="button button--black">
        <span>Return back</span>
      </Link>
    </div>
  );
};

export default CartEmpty;