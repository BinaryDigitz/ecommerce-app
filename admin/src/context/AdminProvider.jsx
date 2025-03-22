import { useEffect, useState } from "react";
import AdminContext from "./AdminContext";

function AdminProvider({ children }) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const currency = '$'
   const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '' );

 useEffect(()=>{
  localStorage.setItem('token', token)
 },[token])
    const values = {
      backendUrl,
      token,
      setToken,
      currency,

    }
  return (
    <AdminContext.Provider value={values}>
       { children }
    </AdminContext.Provider>
  )
}

export default AdminProvider
