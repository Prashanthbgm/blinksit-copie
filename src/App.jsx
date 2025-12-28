import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Search from "./pages/Search";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/category/:name" element={<Category />} />
  <Route path="/search/:text" element={<Search />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/admin" element={<Admin />} />
</Routes>

    </BrowserRouter>
  );
}
