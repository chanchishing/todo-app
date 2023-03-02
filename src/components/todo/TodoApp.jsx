import './TodoApp.css';

import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom';

export default function TodoApp() {
    return (
        <div className="TodoApp">            
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<LoginComponent/>} />
                    <Route path='/login' element={<LoginComponent/>} />
                    <Route path='/welcome/:username' element={<WelcomeComponent/>} />
                    <Route path='/todos' element={<ListTodosComponent/>} />
                    <Route path='/logout' element={<LogoutComponent/>} />
                    <Route path='*' element={<ErrorComponent/>} />
                </Routes>
                <FooterComponent/>
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
                Your todos - <Link to="/todos">Click Here</Link>
            </div>
        </div>
    )
}

function ListTodosComponent() {

    const today= new Date();
    const targetDate=new Date(today.getFullYear()+12,today.getMonth(),today.getDay());

    const todos=[
                {id:1,description:'Learn AWS',done:false,targetDate:targetDate},
                {id:2,description:'Learn Azure',done:false,targetDate:targetDate},
                {id:3,description:'Learn Machine Learning',done:false,targetDate:targetDate},
            ]
    return (
        <div className="container">
            <h1>Things To Do!</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo=>(
                                                <tr key={todo.id}>                            
                                                    <td>{todo.id}</td>
                                                    <td>{todo.description}</td>
                                                    <td>{todo.done.toString()}</td>
                                                    <td>{todo.targetDate.toDateString()}</td>
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

function HeaderComponent() {
    return (
        <header className="border-bottom border-1 b-5 p-2">
            <div className="container">
                <div className="row">
                    <div className="navbar navbar-expand">
                        
                        <a className="navbar-brand fs-3 fw-bold text-black" href="https://www.in28minutes.com">in28minutes</a>                        
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/todos">Todos</Link></li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to="/">Log In</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>
                        </ul>
                    </div>          
                </div>     
            </div>
        </header>
    )
}

function FooterComponent() {
    return (
        <footer className="footer">
            <div className="container">
                Footer
            </div>
        </footer>
    )
}


function LogoutComponent() {
    return (
        <div className="LogoutComponent">
            <h1>You are logged out !</h1>
            <p>Thank You.  Hope to see your soon.</p>
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
