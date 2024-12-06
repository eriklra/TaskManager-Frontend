import { API_ROUTES } from './routes.api';
import { Task } from '../interfaces/Task';

export const API_SERVICES = {
    /**
     * Realiza una petición GET para obtener todas las tareas.
     * @param {string} token - Token de autorización opcional.
     * @returns {Promise<any>} - Lista de tareas.
     */
    async getAllTasks(token?: string): Promise<Task[]> {
        const response = await fetch(API_ROUTES.getAllTasks, {
            method: 'GET',
            headers: {
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message || 'Error al obtener las tareas');
        }

        return await response.json();
    },

    /**
     * Obtiene una tarea por ID.
     * @param {number} id - ID de la tarea.
     * @param {string} token - Token de autorización opcional.
     * @returns {Promise<any>} - Datos de la tarea.
     */
    async getTaskById(id: number, token?: string): Promise<Task> {
        const response = await fetch(API_ROUTES.getTaskById(id), {
            method: 'GET',
            headers: {
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message || `Error al obtener la tarea con ID ${id}`);
        }

        return await response.json();
    },

    /**
     * Crea una nueva tarea.
     * @param {Task} taskData - Datos de la nueva tarea.
     * @param {string} token - Token de autorización opcional.
     * @returns {Promise<any>} - Datos de la tarea creada.
     */
    async createTask(taskData: Task, token?: string): Promise<Response> {
        const response = await fetch(API_ROUTES.createTask, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
            body: JSON.stringify(taskData),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message || 'Error al crear la tarea');
        }

        return await response.json();
    },

     /**
     * Actualiza una tarea.
     * @param {number} id - ID de la tarea a actualizar.
     * @param {Task} updatedTask - Los datos actualizados de la tarea.
     * @param {string} token - Token de autorización opcional.
     * @returns {Promise<Task>} - Tarea actualizada.
     */
     async updateTask(id: number, updatedTask: Task, token?: string): Promise<Task> {
        const response = await fetch(API_ROUTES.updateTask(id), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
            body: JSON.stringify(updatedTask),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message || `Error al actualizar la tarea con ID ${id}`);
        }

        return await response.json();
    },

    /**
     * Oculta una tarea.
     * @param {number} id - ID de la tarea.
     * @param {string} token - Token de autorización opcional.
     */
    async hideTask(id: number, token?: string): Promise<void> {
        const response = await fetch(API_ROUTES.hideTask(id), {
            method: 'PUT',
            headers: {
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message || `Error al ocultar la tarea con ID ${id}`);
        }
    },

    /**
     * Muestra una tarea.
     * @param {number} id - ID de la tarea.
     * @param {string} token - Token de autorización opcional.
     */
    async showTask(id: number, token?: string): Promise<void> {
        const response = await fetch(API_ROUTES.showTask(id), {
            method: 'PUT',
            headers: {
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message || `Error al mostrar la tarea con ID ${id}`);
        }
    },

    /**
     * Elimina una tarea.
     * @param {number} id - ID de la tarea.
     * @param {string} token - Token de autorización opcional.
     */
    async deleteTask(id: number, token?: string): Promise<void> {
        const response = await fetch(API_ROUTES.deleteTask(id), {
            method: 'DELETE',
            headers: {
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message || `Error al eliminar la tarea con ID ${id}`);
        }
    },

    /**
     * Realiza una petición de inicio de sesión.
     * @param {string} username - Correo del usuario.
     * @param {string} password - Contraseña del usuario.
     * @returns {Promise<{ token: string }>} - Datos de la sesión.
     */
    async login(username: string, password: string): Promise<{ token: string }> {
        const response = await fetch(API_ROUTES.login, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message || 'Error en la autenticación');
        }

        return await response.json();
    },

    /**
     * Registra un nuevo usuario.
     * @param {string} username - Correo del nuevo usuario.
     * @param {string} password - Contraseña del nuevo usuario.
     * @returns {Promise<any>} - Datos del usuario registrado.
     */
    async register(username: string, password: string): Promise<Response> {
        const response = await fetch(API_ROUTES.register, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message || 'Error en el registro');
        }

        return await response.json();
    },
};
