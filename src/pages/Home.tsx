import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Home.css'



export const Home = () => {

    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();

    const handleClick = () => {
        if ( isLoggedIn ) {
            navigate('/tasks');
        } else {
            navigate('/login');
        }
        
        console.log("Entrar en el portal");
    };

    return (
        <div className="home-container">
            <h1 className="title">Task Manager</h1>
            <p className="author">Erik Lara</p>
            <button className="enter-button" onClick={handleClick}>
                Access the portal
            </button>
        </div>
    );
};