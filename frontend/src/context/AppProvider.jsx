import React from 'react'
import { AppContext } from './AppContext'

function AppProvider({ children }) {

    const values = {

    }
  return (
    <AppContext.Provider value={values}>
      { children}
    </AppContext.Provider>
  )
}

export default AppProvider
