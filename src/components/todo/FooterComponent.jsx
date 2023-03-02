import { useContext } from 'react';
import { AuthContext } from './security/AuthContext';

export default function FooterComponent() {

    const authContext = useContext(AuthContext);

    console.log(`Footer computer- ${authContext.number}`);   

    return (
        <footer className="footer">
            <div className="container">
                Footer
            </div>
        </footer>
    )
}