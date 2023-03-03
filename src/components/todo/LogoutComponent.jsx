import { useEffect } from "react";
import { useAuth } from "./security/AuthContext";

export default function LogoutComponent() {

    const authContext = useAuth();
        
    function logout() {
        authContext.logout();
    }

    useEffect(()=>logout());
   
    return (
        <div className="LogoutComponent">
            <h1>You are logged out !</h1>
            <p>Thank You.  Hope to see your soon.</p>
        </div>
    )
}