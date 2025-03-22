import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import AdminProvider from "./context/AdminProvider.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <AdminProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AdminProvider>
);
