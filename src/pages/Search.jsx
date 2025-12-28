import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Search() {
  const { text } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    searchProducts(text).then(setProducts);
  }, [text]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-xl font-bold mb-4">
        Search results for "{decodeURIComponent(text)}"
      </h2>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
