


import { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/EditTask.css';


export const EditTask: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [taskTitle, setTaskTitle] = useState('Título de la tarea existente');
  const [taskDescription, setTaskDescription] = useState('Descripción de la tarea existente.');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Tarea actualizada:', { id, taskTitle, taskDescription });
  };

  return (
    <div className="edittask-container">
      <h1 className="edittask-title">Editar Tarea</h1>
      <p className="edittask-id">ID de la Tarea: {id}</p>
      <form className="edittask-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="edittask-input"
        />
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="edittask-input edittask-textarea"
        ></textarea>
        <button type="submit" className="edittask-button">Guardar Cambios</button>
      </form>
    </div>
  );
};