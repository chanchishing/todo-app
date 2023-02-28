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

    const [username,setUsername]=useState('in28minutes');
    const [password,setPassword]=useState('');

    const [showSuccessMessage,setShowSuccessMessage]=useState(false);
    const [showErrorMessage,setShowErrorMessage]=useState(false);

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {
        if (username==='in28minutes' && password==='dummy') {
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
        } else {
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }

    return (
        <div className="Login">
            {showSuccessMessage && <div className="successMessages">Authenticated Sucessfully</div>}
            {showErrorMessage && <div className="errorMessages">Authenticated Failed.  Please check your credentials.</div>}
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
                    <button  type="button" name="login" onClick={handleSubmit}>Login</button>
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