import React from "react";
import { useCart } from "../store/store";
import { productList } from "../data/data";

const ShopPage = () => {
  const { addTocart, cartItem } = useCart();
  const handleaddTocart = (item) => {
    console.log(item);
    addTocart(item);
  };


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shop Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productList.map((product, index) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-xl">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <button
              onClick={() => handleaddTocart(product)}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
