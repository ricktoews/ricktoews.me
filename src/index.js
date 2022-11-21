import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const API_URL = `https://rest.toewsweb.net`;
const initialContentLoad = async () => {
  const url = `${API_URL}/home-content.php/getall`;
  let result = await (await fetch(url)).json();
  result = result.data;

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App content={result} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

initialContentLoad();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
