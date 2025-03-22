
import AdminContext from "./AdminContext";

function AdminProvider({ children }) {


    const values = {

    }
  return (
    <AdminContext.Provider value={values}>
       { children }
    </AdminContext.Provider>
  )
}

export default AdminProvider
