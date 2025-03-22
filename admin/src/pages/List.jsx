import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AdminContext from "../context/AdminContext";
import { toast } from "react-toastify";

function List() {
  const { backendUrl, currency, token } = useContext(AdminContext);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  async function fetchProducts() {
    try {
      const { data } = await axios.get(backendUrl + "/api/products/list");
      const { success, products } = data;
      if (!success) {
        setError("Failed fetching products");
        toast.error("Failed fetching product");
      }
      setProducts(products);
    } catch (ex) {
      toast.error(ex.message);
    }
  }
  async function deleteProduct(id) {
    try {
      const { data } = await axios.post(backendUrl + "/api/products/remove", { id }, { headers: { token}});
      console.log(data);
      
      const { success, message } = data;
      if (success) {
        toast.success(message);
        fetchProducts()
        return;
      }
      toast.error(message);
      setError(message);
    } catch (ex) {
      console.log(ex.message);
      
      toast.error(ex.message);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

 

  return (
    <div>
      <p className="mb-2">All Products List</p>
      <div className="flex gap-2 flex-col border">
        {/* ............LIST TABLE TITLE */}

        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border border-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Actions</b>
        </div>
        {/* ... products list......... */}
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="grid gird-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
            >
              <img className="w-12" src={product.images[0]} alt="" />
              <p>{product.name}</p>
              <p>{product.category}</p>
              <p>
                {currency}
                {product.price}
              </p>

              <button
              onClick={() => deleteProduct(product._id)}
                title="Delete product"
                className="text-right md:text text-red-500 px-4 py-1 border rounded-sm cursor-pointer"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
