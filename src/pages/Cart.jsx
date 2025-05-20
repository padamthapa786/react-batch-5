import React from "react";
import { useCart } from "../store/store";

const Cart = () => {
  const { cartItem } = useCart();

  return (
    <>
      {cartItem.length === 0 ? (
        <p>No item Available</p>
      ) : (
        <ul>
          {cartItem.map((value, index) => (
            <div className=" flex  gap-4 border-b">
              <li>Product Name : {value.name}</li>
              <li>Product Price: {value.price}</li>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cart;
