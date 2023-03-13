import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from './security/AuthContext';

import { retrieveHelloWorldBean,retrieveHelloWorldPathVariable } from './api/HelloWorldApiService.js';

export default function WelcomeComponent() {

    const {username}=useParams();

    const [message,setMessage]=useState(null);

    const authContext=useAuth();




    function callHelloWorldRestApi(){
        console.log("hello world");
        retrieveHelloWorldPathVariable('Ranga',authContext.token)
            .then((response)=>sucessfulBeanResponse(response))
            .catch((error)=>errorResponse(error))
            .finally(()=>console.log('cleanup'));
    }

    // function sucessfulResponse(response) {
    //     console.log(response.data);
    //     setMessage(response.data);
    // }

    function errorResponse(error) {
        console.log(error);
    }

    function callHelloWorldBeanRestApi(){
        console.log("hello world bean");
        
        retrieveHelloWorldBean(authContext.token)
            .then((response)=>sucessfulBeanResponse(response))
            .catch((error)=>errorResponse(error))
            .finally(()=>console.log('cleanup'));
        
    }

    function sucessfulBeanResponse(response) {
        console.log(response);
        setMessage(response.data.message);
    }




    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>    
                Your todos - <Link to="/todos">Click Here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>Call Hello World Path Variable</button>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldBeanRestApi}>Call Hello World Bean</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}