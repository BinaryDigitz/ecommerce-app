import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  List,
  Add,
  Orders,
  Navbar,
  Sidebar,
  Login,
} from "./components/exportComp";
import AdminContext from "./context/AdminContext";

function App() {
  const { token } = useContext(AdminContext);

  return (
    <div className="bg-gray-50 min-h-screen">
      {token === "" ? (
        <Login />
      ) : (
        <>
          <header>
            <Navbar />
            <hr />
          </header>
          <aside className="flex w-full">
            <Sidebar />
          </aside>
            <ToastContainer />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/list" element={<List />} />
              <Route path="/add" element={<Add />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <footer>footer</footer>
        </>
      )}
    </div>
  );
}

export default App;
