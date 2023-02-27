import './TodoApp.css';
import { useState } from 'react';

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <LoginComponent/>
            {/* <WelcomeComponent/> */}
        </div>
    )
}



function LoginComponent() {

    const [username,setUsername]=useState('in28minutes')
    const [password,setPassword]=useState('')

    function handleUsernameChange(event) {
        //console.log(event.target.value)
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        //console.log(event.target.value)
        setPassword(event.target.value)
    }


    return (
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input  type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input  type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button  type="button" name="login">Login</button>
                </div>

            </div>

        </div>
    )
}

function WelcomeComponent() {
    return (
        <div className="Welcomeogin">
            Welcome Component
        </div>
    )
}