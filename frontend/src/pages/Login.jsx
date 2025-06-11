import React, { useContext, useEffect, useState } from "react";
import ShopContext from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

function Login() {
  const { token, setToken, backendUrl, navigate, setUserData } =
    useContext(ShopContext);
  const [currentState, setCurrentState] = useState("Login");

  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });

  function clearForm() {
    setUser({
      email: "",
      password: "",
      name: "",
    });
  }
  function handleChangeState() {
    if (currentState === "Login") {
      setCurrentState("Sign Up");
    } else {
      setCurrentState("Login");
    }
  }
  async function handleFormSumbit(event) {
    event.preventDefault();
    const { name, email, password } = user;

    // IF IT IS LOGIN
    if (currentState === "Login") {
      try {
        const { data } = await axios.post(backendUrl + "/api/auth/login", {
          email,
          password,
        });
        const { success, message, user, user_token } = data;
        if (success) {
          toast.success(message);
          setUserData(user);
          setToken(user_token)
          localStorage.setItem('token', user_token)
          setTimeout(() => navigate("/"), 1000);
          clearForm();
          return;
        }
        toast.error(message);
        return;
      } catch (ex) {
        toast.error(ex.message);
      }
    }

    // SIGNUP
    else {
      try {
        const { data } = await axios.post(backendUrl + "/api/auth/register", {
          name,
          email,
          password,
        });
        const { success, message, user, user_token } = data;
        if (success) {
          toast.success(message);
          setUserData(user);
          localStorage.setItem('token', user_token)
          setToken(user_token)
          setTimeout(() => navigate("/"), 1000);
          clearForm();
          return;
        }
        toast.error(message);
        return;
      } catch (ex) {
        toast.error(ex.message);
      }
    }
  };
  useEffect(() =>{
    if(token) return navigate('/')
  },[token])
  return (
    <form
      onSubmit={handleFormSumbit}
      className="flex flex-col items-center  w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <h1 className="heading3 prata-regular">{currentState}</h1>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        " "
      ) : (
        <input
          type="text"
          required
          autoComplete="full name"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      )}
      <input
        type="email"
        required
        autoComplete="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="password"
        required
        autoComplete="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      {currentState === "Login" ? (
        <p className=" cursor-pointer text-sm mt-[-8px] text-start w-full">
          Forgot password?
        </p>
      ) : (
        ""
      )}
      <button className="border w-full py-2 bg-black text-white hover:bg-gray-800 trans cursor-pointer">
        {currentState}
      </button>
      {currentState === "Login" ? (
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p>Don't have an account?</p>
          <p
            onClick={handleChangeState}
            className="text-indigo-600 cursor-pointer "
          >
            Create account
          </p>
        </div>
      ) : (
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p>Already have an account?</p>
          <p
            onClick={handleChangeState}
            className="text-indigo-600 cursor-pointer "
          >
            Login
          </p>
        </div>
      )}
    </form>
  );
}

export default Login;
