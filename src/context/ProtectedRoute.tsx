

import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute: React.FC = () => {
    const { isLoggedIn } = useAuth();
    console.log('isLoggedIn:', isLoggedIn);
    // Si no está logueado, redirige al login
    if (!localStorage.getItem('jwtToken')) {
        return <Navigate to="/login" />;
    }

    return <Outlet />; // Renderiza los hijos si está autenticado
};

/*import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute: React.FC = () => {
    const token = localStorage.getItem('jwtToken');

    if (!token) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};*/