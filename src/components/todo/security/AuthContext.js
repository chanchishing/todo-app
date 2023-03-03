import { createContext, useContext, useState } from "react";

export const AuthContext=createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider ({children}){

    const [number,setNumber]=useState(10);
    const [isAuthenticated,setAuthenticated]=useState(false);
   
    function login(username,password) {
        if (username==='in28minutes' && password==='dummy') {
            setAuthenticated(true);     
            return true;      
        } else {
            setAuthenticated(false);
            return false;
        }       
    }

    function logout() {
        setAuthenticated(false);
    }

    return(
        <AuthContext.Provider value={{number, isAuthenticated, setAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}