import { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClent";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";

export const AuthContext=createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider ({children}){

    const [isAuthenticated,setAuthenticated]=useState(false);
    const [username,setUsername]=useState(null);
    const [token,setToken]=useState(null);
  
    async function login(username,password) {

        const basicAuthToken = 'Basic ' + window.btoa(username + ":" + password)

        console.log(`username=> ${username}`);
        console.log(`username=> ${password}`);

        try {
            const response=await executeBasicAuthenticationService(basicAuthToken);

            if (response.status===200) {
                setAuthenticated(true);
                setUsername(username);
                setToken(basicAuthToken);
                apiClient.interceptors.request.use(
                    (config)=>{
                        console.log('intercepting to add token');
                        config.headers.Authorization=basicAuthToken;
                        return config
                    }
                )
                return true;      
            } else {
                logout();
                return false;
            }
        } catch (error) {
            logout();
            return false;
        }      
    }


    function logout() {
        setAuthenticated(false);
        setUsername(null);
        setToken(null);
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, login, logout, username,token}}>
            {children}
        </AuthContext.Provider>
    )
}