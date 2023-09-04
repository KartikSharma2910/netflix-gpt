import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Toaster
      gutter={8}
      toastOptions={{
        duration: 5000,
        style: {
          background: "#363636",
          color: "#fff",
        },
        success: {
          duration: 3000,
          theme: {
            primary: "green",
            secondary: "black",
          },
        },
      }}
    />
  </React.StrictMode>
);
