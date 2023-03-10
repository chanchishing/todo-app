import { Link } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

export default function HeaderComponent() {
    
    
    const authContext = useAuth();
    const isAuthenticated=authContext.isAuthenticated;
      
    return (
        <header className="border-bottom border-1 b-5 p-2">
            <div className="container">
                <div className="row">
                    <div className="navbar navbar-expand">
                        
                        <a className="navbar-brand fs-3 fw-bold text-black" href="https://www.in28minutes.com">in28minutes</a>                        
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                {isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
                                {isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/todos">Todos</Link></li>}
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            {!isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/">Log In</Link></li>}
                            {isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>}
                        </ul>
                    </div>          
                </div>     
            </div>
        </header>
    )
}