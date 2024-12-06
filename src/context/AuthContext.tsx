
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    userEmail: string;
    login: (email: string, token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userEmail, setUserEmail] = useState<string>('');

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        const username = localStorage.getItem('jwtUsername'); // Cambié el nombre a jwtUsername
    
        if (token && username) {
            setIsLoggedIn(true);
            setUserEmail(username);
        }
    }, []);

    const login = (email: string, token: string) => {
        setIsLoggedIn(true);
        setUserEmail(email);
        localStorage.setItem('jwtToken', token); // Almacena el token
        localStorage.setItem('jwtUsername', email);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserEmail('');
        localStorage.removeItem('jwtToken'); // Elimina el token al cerrar sesión
        localStorage.removeItem('jwtUsername');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userEmail, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
