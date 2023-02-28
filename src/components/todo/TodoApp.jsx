import './TodoApp.css';

import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>} />
                    <Route path='/login' element={<LoginComponent/>} />
                    <Route path='/welcome/:username' element={<WelcomeComponent/>} />
                    <Route path='/todos' element={<ListTodosComponent/>} />
                    <Route path='*' element={<ErrorComponent/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent() {

    const [username,setUsername]=useState('in28minutes');
    const [password,setPassword]=useState('');

    const [showSuccessMessage,setShowSuccessMessage]=useState(false);
    const [showErrorMessage,setShowErrorMessage]=useState(false);

    const navigate=useNavigate();

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
            navigate(`/welcome/${username}`);
        } else {
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


function WelcomeComponent() {

    const {username}=useParams();

    // console.log(username);

    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Welcome Component
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>Opps!</h1>
            <p>The URL you want to access does not exist, please verify your url.</p>
            <p>Please contact us at our email address enquiry@abc.com, if you have any enquiry.</p>            
        </div>
    )
}

function ListTodosComponent() {

    const todos=[
                {id:1,description:'Learn AWS'},
                {id:2,description:'Learn Azure'},
                {id:3,description:'Learn Machine Learning'},
            ]
    return (
        <div className="ListTodosComponent">
            <h1>Things To Do!</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo=>(
                                                <tr key={todo.id}>                            
                                                    <td>{todo.id}</td>
                                                    <td>{todo.description}</td>
                                                </tr>
                                            )
                                    )
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}