# 🛒 Blinkit Clone – Full Stack MERN Application

A **Blinkit-inspired grocery delivery web application** built using the **MERN stack**.  
This project replicates the **core workflow of Blinkit** — category-based shopping, real-time cart, distance-based delivery charges, admin management, and checkout flow.

> ⚠️ This project is built for **learning, portfolio, and demonstration purposes**.

---

## 🚀 Features

### 👤 User Side
- 🏠 Home page with **categories fetched from backend**
- 📦 Category-wise product listing
- 🔍 **Search products** from header (backend-powered)
- ➕ Add to cart with quantity `+ / -`
- 📍 **Enable location using GPS**
- 🚚 Distance-based delivery charge (₹5/km)
- 📦 Handling charge calculation
- 💰 Real-time total & grand total calculation
- ✅ Order placement with success animation

### 🧑‍💼 Admin Panel
- ➕ Add new categories
- ➕ Add products
- 📂 Category dropdown while adding products
- 🔒 Separate admin section in header

---

## 🧠 Real Blinkit Logic Used

- Cart handled on **frontend (Context API)**  
- Orders stored in **MongoDB** only after checkout  
- Location fetched **on user action** (not auto-tracked)
- Distance calculated using **Haversine Formula**
- Backend-powered search & filtering
- Clean separation of **frontend & backend**

---

## 🧰 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router
- Context API
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- REST APIs

---

## 📁 Project Structure

### Frontend
