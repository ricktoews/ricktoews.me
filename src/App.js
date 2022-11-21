import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Articles from "./Articles";
import "./assets/css/App.css";

function App(props) {
  const { content } = props;
  const categories = Array.from(
    new Set(content.map((item) => item.category))
  ).sort();

  return (
    <div className="App">
      <Navbar categories={categories} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/category/:category"
          element={<Articles content={content} />}
        />
      </Routes>
    </div>
  );
}

export default App;
