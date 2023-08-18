import React from "react";
import "./styles.css";
import Search from "./Search";
import Temperature from "./Temperature";
import City from "./City";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Search />
          <City />
          <Temperature />
        </div>
        <Footer />
      </div>
    </div>
  );
}
