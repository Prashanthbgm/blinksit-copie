import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaUserShield, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search/${encodeURIComponent(search)}`);
      setSearch("");
    }
  };

  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">

        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer text-2xl font-bold text-green-600"
        >
          blinkS<span className="text-black">it</span>
        </h1>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="flex flex-1 items-center bg-gray-100 rounded-lg px-3 py-2"
        >
          <FaSearch className="text-gray-500" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products..."
            className="bg-transparent outline-none px-2 w-full text-sm"
          />
        </form>

        {/* Admin */}
        <button
          onClick={() => navigate("/admin")}
          className="text-sm text-gray-700 hover:text-green-600"
        >
          <FaUserShield /> Admin
        </button>

        {/* Cart */}
        <button
          onClick={() => navigate("/cart")}
          className="relative bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <FaShoppingCart />
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 w-5 h-5 text-xs rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
