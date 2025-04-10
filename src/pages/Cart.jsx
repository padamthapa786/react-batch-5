import React from "react";
import useStore from "../store/zustandstore";

const Cart = () => {
  const { cart } = useStore();

  return (
    <>
      {cart.length === 0 ? (
        <p>No item Available</p>
      ) : (
        <ul>
          {cart.map((value, index) => (
            <li>{value.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cart;
