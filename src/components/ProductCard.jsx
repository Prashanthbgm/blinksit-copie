import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { cart, addToCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const cartItem = cart.find((c) => c._id === product._id);

  return (
    <div className="bg-white rounded-xl p-4 shadow hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-32 w-full object-contain mb-3"
      />

      <h3 className="text-sm font-semibold">{product.name}</h3>
      <p className="text-green-600 font-bold">₹{product.price}</p>

      {!cartItem ? (
        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full border border-green-600 text-green-600 py-1 rounded hover:bg-green-600 hover:text-white"
        >
          ADD
        </button>
      ) : (
        <div className="mt-3 flex justify-between items-center border rounded">
          <button onClick={() => decreaseQty(product._id)}>-</button>
          <span>{cartItem.qty}</span>
          <button onClick={() => increaseQty(product._id)}>+</button>
        </div>
      )}
    </div>
  );
}
