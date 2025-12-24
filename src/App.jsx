import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <main>
    
      <Header /> {/* Top navigation or branding */}
      <Outlet /> {/* Dynamic page content */}
      <Footer /> {/* Footer section */}
    </main>
  );
};

export default App;
