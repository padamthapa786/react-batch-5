import React from 'react'
import useStore from '../store/zustandstore';

const ProductPage = () => {
  const products = [
    { id: 1, name: "Product 1", imageUrl: "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=" },
    { id: 2, name: "Product 2", imageUrl: "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=" },
    { id: 3, name: "Product 3", imageUrl: "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=" },
    { id: 4, name: "Product 4", imageUrl: "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=" },
    { id: 5, name: "Product 5", imageUrl: "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE=" }
  ];

  const {count,cart, addCart,removeCart}= useStore()

  const addtoCard = (product) =>{
    addCart(product)
  }
  const removeCard = (id)=>{
    removeCart(id)
  }
  return (
    <div>
      <h1>Product Page</h1>
      <ul>
        {products.map(product => (
          <li key={product.id} className="flex items-center gap-4 mb-4">
            <img src={product.imageUrl} alt={product.name} className="w-20 h-20 object-cover rounded-md" />
            <span>{product.name}</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>addtoCard(product)}>Add to Cart</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>removeCard(product.id)}>Remove From Cart</button>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductPage