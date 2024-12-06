import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import '../styles/Login.css';
import { useNavigate } from "react-router-dom";
import { API_SERVICES } from "../api/services.api";


export const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>(''); // Estado para manejar errores
    const navigate = useNavigate(); // Inicializa useNavigate

    const handleSubmit = async(event: React.FormEvent) => {
        event.preventDefault();
        console.log('Email:', email, 'Password:', password);

        try {
            const data = await API_SERVICES.login(email, password); // Llama al método login de API_SERVICES
            login(email, data.token); 
            navigate('/tasks'); // Redirige al usuario a la lista de tareas
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message || 'Error en la autenticación'); // Muestra el mensaje de error
            } else {
                setError('Error desconocido');
            }
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Iniciar Sesión</h2>
            {error && <p className="error-message">{error}</p>} {/* Muestra mensaje de error */}
            <form className="login-form-group" onSubmit={handleSubmit}>
                <div>
                    <label className="login-label" htmlFor="email">Correo Electrónico</label>
                    <input 
                        className="login-input"
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label className="login-label" htmlFor="password">Contraseña</label>
                    <input 
                        className="login-input"
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button className="login-button" type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};