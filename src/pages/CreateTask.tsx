
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_SERVICES } from '../api/services.api';
import '../styles/CreateTask.css';

export const CreateTask: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('El título de la tarea es obligatorio.');
      return;
    }

    try {
      const newTask = { title, description, completed: false };
      await API_SERVICES.createTask(newTask); // Crea la tarea usando la API
      navigate('/tasks'); // Redirige al usuario al listado de tareas
    } catch (err) {
      console.error(err);
      setError('Hubo un problema al crear la tarea.');
    }
  };

  return (
    <div className="createtask-container">
      <h1 className="createtask-title">Create New Task</h1>
      {error && <p className="createtask-error">{error}</p>}
      <form className="createtask-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título de la tarea"
          className="createtask-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Descripción"
          className="createtask-input createtask-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="createtask-button">
          Create
        </button>
      </form>
    </div>
  );
};
