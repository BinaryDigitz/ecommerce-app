import React from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  List,
  Add,
  Orders,
  Navbar,
  Sidebar,
} from "./components/exportComp";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header>
        <Navbar />
        <hr />
      </header>
      <aside className="flex w-full">
        <Sidebar />
      </aside>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <ToastContainer />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
