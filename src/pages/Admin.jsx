import { useEffect, useState } from "react";

export default function Admin() {
  // category state
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    name: "",
    image: "",
  });

  // product state
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
    stock: "",
  });

  // 🔹 fetch categories
  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // 🔹 add category
  const addCategory = async () => {
    if (!newCategory.name || !newCategory.image) {
      alert("Fill all category fields");
      return;
    }

    await fetch("http://localhost:5000/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCategory),
    });

    alert("Category Added");

    setNewCategory({ name: "", image: "" });

    // refresh categories
    const res = await fetch("http://localhost:5000/api/categories");
    setCategories(await res.json());
  };

  // 🔹 add product
  const addProduct = async () => {
    if (
      !product.name ||
      !product.price ||
      !product.category
    ) {
      alert("Fill all required product fields");
      return;
    }

    await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    alert("Product Added");

    setProduct({
      name: "",
      price: "",
      description: "",
      image: "",
      category: "",
      stock: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <h2 className="text-2xl font-bold">Admin Panel</h2>

      {/* ADD CATEGORY */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-3">Add Category</h3>

        <input
          placeholder="Category Name"
          value={newCategory.name}
          onChange={(e) =>
            setNewCategory({ ...newCategory, name: e.target.value })
          }
          className="border p-2 w-full mb-2"
        />

        <input
          placeholder="Category Image URL"
          value={newCategory.image}
          onChange={(e) =>
            setNewCategory({ ...newCategory, image: e.target.value })
          }
          className="border p-2 w-full mb-2"
        />

        <button
          onClick={addCategory}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Category
        </button>
      </div>

      {/* ADD PRODUCT */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-3">Add Product</h3>

        <input
          placeholder="Product Name"
          value={product.name}
          onChange={(e) =>
            setProduct({ ...product, name: e.target.value })
          }
          className="border p-2 w-full mb-2"
        />

        <input
          placeholder="Price"
          type="number"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: e.target.value })
          }
          className="border p-2 w-full mb-2"
        />

        <textarea
          placeholder="Description"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          className="border p-2 w-full mb-2"
        />

        <input
          placeholder="Image URL"
          value={product.image}
          onChange={(e) =>
            setProduct({ ...product, image: e.target.value })
          }
          className="border p-2 w-full mb-2"
        />

        {/* 🔥 CATEGORY DROPDOWN */}
        <select
          value={product.category}
          onChange={(e) =>
            setProduct({ ...product, category: e.target.value })
          }
          className="border p-2 w-full mb-2"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>

        <input
          placeholder="Stock"
          type="number"
          value={product.stock}
          onChange={(e) =>
            setProduct({ ...product, stock: e.target.value })
          }
          className="border p-2 w-full mb-4"
        />

        <button
          onClick={addProduct}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>
    </div>
  );
}
