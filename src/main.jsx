import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopContext from "./Context/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopContext>
    <App />
  </ShopContext>
);
