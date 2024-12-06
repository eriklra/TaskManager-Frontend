import React, { useState, useEffect } from 'react';
import { Task } from '../interfaces/Task';
import { API_SERVICES } from '../api/services.api';
import '../styles/TaskList.css';
import { Link } from 'react-router-dom';

export const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const tasksData = await API_SERVICES.getAllTasks();
                setTasks(tasksData); // Almacena las tareas obtenidas
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message || 'Hubo un problema al cargar las tareas.');
                } else {
                    setError('Hubo un problema al cargar las tareas.');
                }
            }
        };

        fetchTasks();
    }, []);

    return (
        <div className="tasklist-container">
            <h1 className="tasklist-title">My Tasks</h1>
            {error && <p className="error-message">{error}</p>}
    
            <ul className="tasklist-items">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <Link to={`/tasks/${task.id}`} key={task.id} className="tasklist-item-link">
                            <li className={`tasklist-item ${task.completed ? 'completed' : ''}`}>
                                <div className="tasklist-item-header">
                                    <h2 className="tasklist-item-title">{task.title}</h2>
                                    <span className={`tasklist-item-status ${task.completed ? 'completed-status' : 'pending-status'}`}>
                                        {task.completed ? 'Completada' : 'Pendiente'}
                                    </span>
                                </div>
                                {task.description && <p className="tasklist-item-description">{task.description}</p>}
                                <div className="tasklist-item-dates">
                                    <span className="tasklist-item-id">
                                        ID: {task.id}
                                    </span>
                                    <span className="tasklist-item-created-at">
                                        Creada: {task.created_at ? new Date(task.created_at).toLocaleDateString() : 'N/A'}
                                    </span>
                                    <span className="tasklist-item-updated-at">
                                        Actualizada: {task.updated_at ? new Date(task.updated_at).toLocaleDateString() : 'N/A'}
                                    </span>
                                </div>
                            </li>
                        </Link>
                    ))
                ) : (
                    <li>No hay tareas disponibles.</li>
                )}
            </ul>
            <Link to="/tasks/create">

                <button className="tasklist-button">New Task</button>
            </Link>
            
        </div>
    );
    
};