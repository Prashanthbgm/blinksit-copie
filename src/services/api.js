const BASE_URL = "http://localhost:5000/api";

export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories`);
  return res.json();
};

export const getProductsByCategory = async (category) => {
  const res = await fetch(
    `${BASE_URL}/products?category=${encodeURIComponent(category)}`
  );
  return res.json();
};

export const placeOrder = async (order) => {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });

  if (!res.ok) {
    throw new Error("Order failed");
  }

  return res.json();
};
export const searchProducts = async (text) => {
  const res = await fetch(
    `${BASE_URL}/products?search=${encodeURIComponent(text)}`
  );
  return res.json();
};
