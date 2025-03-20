import React, { useState } from "react";

function Login() {
  const [currentState, setCurrentState] = useState("Login");
 function clearForm(){
  
 }
  function handleChangeState(){
    if(currentState === 'Login'){
      setCurrentState('Sign Up')
    }
    else{
      setCurrentState('Login')
    }
  }
  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
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
        />
      )}
      <input
        type="email"
        required
        autoComplete="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
      />
      <input
        type="password"
        required
        autoComplete="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="password"
      />
      {
        currentState === 'Login' ? (
          <p className=" cursor-pointer text-sm mt-[-8px] text-start w-full">Forgot password?</p>
        ) : ''
      }
   <button className="border w-full py-2 bg-black text-white hover:bg-gray-800 trans cursor-pointer">{currentState}</button>
      {currentState === "Login" ? (
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p>Don't have an account?</p>
          <p onClick={handleChangeState} className="text-indigo-600 cursor-pointer ">Create account</p>
        </div>
      ) : (
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p>Already have an account?</p>
          <p onClick={handleChangeState} className="text-indigo-600 cursor-pointer ">Login</p>
        </div>
      )}
    </form>
  );
}

export default Login;
