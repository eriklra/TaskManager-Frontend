const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const API_ROUTES = {
    // Rutas de tareas
    getAllTasks: `${API_BASE_URL}/tasks/`, // Obtener todas las tareas
    getTaskById: (id: number) => `${API_BASE_URL}/tasks/${id}`, // Obtener una tarea por ID
    createTask: `${API_BASE_URL}/tasks/`, // Crear una tarea
    updateTask: (id: number) => `${API_BASE_URL}/tasks/${id}`, // Actualizar una tarea
    hideTask: (id: number) => `${API_BASE_URL}/tasks/${id}/hide`, // Ocultar una tarea
    showTask: (id: number) => `${API_BASE_URL}/tasks/${id}/show`, // Mostrar una tarea
    deleteTask: (id: number) => `${API_BASE_URL}/tasks/${id}`, // Eliminar una tarea

    // Rutas de autenticación
    login: `${API_BASE_URL}/auth/login`, // Iniciar sesión
    register: `${API_BASE_URL}/auth/register`, // Registrar un usuario
};
