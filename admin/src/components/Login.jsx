import React, { useContext, useState } from "react";
import AdminContext from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { backendUrl, setToken, } = useContext(AdminContext);
  const [ error, setError] = useState('');    
  const [ isLoading, setLoading ] = useState(false)                                      
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });
  function clearForm() {
    setLoading(false)
    setAdmin({ email: "", password: "" });
  }
  async function handleFormSubmit(event) {
    event.preventDefault();
    setLoading(true)
    setError('')
    try {
      const { data } = await axios.post(backendUrl + "/api/auth/admin", {
        email: admin.email,
        password: admin.password,
      });

      const { success, message } = data;

      if (!success) {
        toast.error(message);
        setToken("");
        clearForm();
        return;
      } else {
        setError(message)
        toast.success(message);
        setToken(data.admin_token);
        setTimeout(() => navigate("/"), 1000);
        clearForm();
        return;
      }
    } catch (ex) {
      toast.error(ex.message);
      console.log(ex.message, ex);
    }
  }
  return (
    <div className="min-h-screen grid place-items-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={handleFormSubmit} action="#">
          <div className="flex min-w-72 flex-col mb-3">
            <label
              className="text-sm font-medium text-gray-700 mb-2"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              value={admin.email}
              onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
              className="rounded-md w-full px-3 py-2 border outline-none border-gray-300"
              type="email"
              id="password"
              placeholder="Email address"
              required
              autoComplete="email"
            />
          </div>
          <div className="flex min-w-72 flex-col mb-3">
            <label
              className="text-sm font-medium text-gray-700 mb-2"
              htmlFor="password"
            >
              Email address
            </label>
            <input
              value={admin.password}
              onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
              className="rounded-md w-full px-3 py-2 border outline-none border-gray-300"
              type="password"
              id="password"
              placeholder="Password"
              required
              autoComplete="password"
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 rounded-md cursor-pointer text-white hover:opacity-75 trans bg-black"
            type="submit"
          >
            {
                isLoading ? "Loding..." : 'Login'
            }
          </button>
          {
            error && <p className="text-sm text-red-500 text-center -mt-0.2">{error}</p>
          }
        </form>
      </div>
    </div>
  );
}

export default Login;
