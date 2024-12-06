import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './context/ProtectedRoute';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { TaskList } from './pages/TaskList';
import { TaskDetail } from './pages/TaskDetail';
import { CreateTask } from './pages/CreateTask';
import { EditTask } from './pages/EditTask';
import { Profile } from './pages/Profile';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Rutas Protegidas */}
          <Route path="/tasks" element={<ProtectedRoute />}>
            <Route index element={<TaskList />} /> {/* Lista de tareas */}
            <Route path=":id" element={<TaskDetail />} /> {/* Detalle de una tarea */}
            <Route path="create" element={<CreateTask />} /> {/* Crear tarea */}
            <Route path="edit/:id" element={<EditTask />} /> {/* Editar tarea */}
          </Route>

          <Route path="/profile" element={<ProtectedRoute />}>
            <Route index element={<Profile />} /> {/* Perfil del usuario */}
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
