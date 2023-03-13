import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";

export const AuthContext=createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider ({children}){

    const [isAuthenticated,setAuthenticated]=useState(false);
    const [username,setUsername]=useState(null);
   
    // function login(username,password) {
    //     if (username==='in28minutes' && password==='dummy') {
    //         setAuthenticated(true);
    //         setUsername(username);
    //         return true;      
    //     } else {
    //         setAuthenticated(false);
    //         setUsername(null);
    //         return false;
    //     }       
    // }

    function login(username,password) {

        const basicAuthToken = 'Basic ' + window.btoa(username + ":" + password)

        console.log(`username=> ${username}`);
        console.log(`username=> ${password}`);

        executeBasicAuthenticationService(basicAuthToken)
        .then(response=>console.log(response))
        .catch(error=>console.log(error));

        setAuthenticated(false);

        // if (username==='in28minutes' && password==='dummy') {
        //     setAuthenticated(true);
        //     setUsername(username);
        //     return true;      
        // } else {
        //     setAuthenticated(false);
        //     setUsername(null);
        //     return false;
        // }       
    }


    function logout() {
        setAuthenticated(false);
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, login, logout, username}}>
            {children}
        </AuthContext.Provider>
    )
}