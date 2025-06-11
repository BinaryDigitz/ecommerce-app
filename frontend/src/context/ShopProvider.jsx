import React, { useEffect, useState } from "react";
import ShopContext from "./ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ShopProvider({ children }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState("");
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  async function addToCart(id, size) {
    let cartData = structuredClone(cartItems);
    if (cartData[id]) {
      if (cartData[id][size]) {
        cartData[id][size] += 1;
      } else {
        cartData[id][size] = 1;
      }
    } else {
      cartData[id] = {};
      cartData[id][size] = 1;
    }
    setCartItems(cartData);
  }
  function getCartCount() {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (ex) {
          console.log(ex.message);
        }
      }
    }
    return totalCount;
  }
  async function updateQuantity(id, size, quantity) {
    let cartData = structuredClone(cartItems);
    cartData[id][size] = quantity;
    setCartItems(cartData);
  }
  function getCartAmount() {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
    return totalAmount;
  }
  async function fetchProducts() {
    try {
      const { data } = await axios.get(backendUrl + "/api/products/list");
      const { success, products } = data;

      if (success) {
        setProducts(products);
        return;
      }
      toast.error("Error fetching products");
    } catch (ex) {
      toast.error(ex.message);
    }
  }
  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem('token'));
    }
  }, [token]);

  useEffect(() => {
    fetchProducts();
  }, []);
  const values = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    setToken,
    token,
    userData,
    setUserData,
  };
  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
}

export default ShopProvider;
