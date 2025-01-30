import React from "react";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import "./assets/css/App.scss";

function App(props) {
  const categories = [];
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/portfolio/grading-assistant" element={<Home portfolio-item="grading-assistant" />} />
          <Route exact path="/portfolio/math-toys-api" element={<Home portfolio-item="math-toys-api" />} />
          <Route exact path="/portfolio/wordmage" element={<Home portfolio-item="wordmage" />} />
          <Route exact path="/portfolio/math-toys" element={<Home portfolio-item="math-toys" />} />
          <Route exact path="/portfolio/art-games" element={<Home portfolio-item="art" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
