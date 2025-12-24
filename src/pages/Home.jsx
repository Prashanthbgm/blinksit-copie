import React from "react";
import banner from "../assets/banner.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Banner Section */}
      <section className="banner-section">
        <img src={banner} alt="Banner" className="banner-img" />
        <div className="banner-content">
          <h1>Welcome to Blinkit </h1>
          <p>Find the Daily necessary what you want</p>
          <button className="explore-btn">Explore Now</button>
        </div>
      </section>
        <section className="categories">
        <div className="category-card">
          <h2>🛒 Daily Needs</h2>
          <p>Shop for groceries and everyday essentials.</p>
          <button>Explore</button>
        </div>
        <div className="category-card">
          <h2>🔌 Electronics</h2>
          <p>Find the best gadgets and accessories.</p>
          <button>Explore</button>
        </div>
        <div className="category-card">
          <h2>🖨️ Print Store</h2>
          <p>Notes, study material & prints at your fingertips.</p>
          <button>Explore</button>
        </div>
      </section>
    </div>
    

  );
};

export default Home;
