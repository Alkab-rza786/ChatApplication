import React, { createContext, useContext, useState } from 'react'
import Cookies from 'js-cookie'

export const AuthContext = createContext()

export function AuthProvider({children}) {


    const intialState = Cookies.get("jwt") || localStorage.getItem("ChatApp")

    // parse the user data and storing in state

    const [authUser,seAuthUser] = useState(intialState? JSON.parse(intialState):undefined)
  return (
    <AuthContext.Provider value={[authUser,seAuthUser]}>
        {children}
      
    </AuthContext.Provider>
  )
}

export const  useAuth = () => useContext(AuthContext)
