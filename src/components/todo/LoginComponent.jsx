
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

export default function LoginComponent() {

    const [username,setUsername]=useState('in28minutes');
    const [password,setPassword]=useState('');

    const [showSuccessMessage,setShowSuccessMessage]=useState(false);
    const [showErrorMessage,setShowErrorMessage]=useState(false);

    const navigate=useNavigate();

    const authContext = useAuth();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {
        if (username==='in28minutes' && password==='dummy') {
            authContext.setAuthenticated(true);
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`);
            
        } else {
            authContext.setAuthenticated(false);
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }

    return (
        <div className="Login">
            <h1>Login</h1>
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