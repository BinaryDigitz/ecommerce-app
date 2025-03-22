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
          <section className="flex  w-full">
            <aside className="w-52 border">
              <Sidebar />
            </aside>
            <ToastContainer />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
          </section>
          <footer>footer</footer>
        </>
      )}
    </div>
  );
}

export default App;
