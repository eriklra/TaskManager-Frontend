import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_SERVICES } from '../api/services.api';
import { Task } from '../interfaces/Task';
import '../styles/TaskDetail.css';

export const TaskDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState<Task | null>(null);
  const [error, setError] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [editedTitle, setEditedTitle] = useState<string>('');
  const [editedDescription, setEditedDescription] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      if (id) {
        try {
          const taskData = await API_SERVICES.getTaskById(parseInt(id));
          setTask(taskData);
          setEditedTitle(taskData.title);
          setEditedDescription(taskData.description || '');
          setIsCompleted(taskData.completed);
          setIsShow(taskData.show || false);
        } catch (err) {
          console.log(err);
          setError('No se pudo cargar la tarea.');
        }
      }
    };
    fetchTask();
  }, [id]);

  const handleStatusChange = async () => {
    if (task && task.id) {
      const updatedTask = { ...task, completed: !isCompleted };
      try {
        const updated = await API_SERVICES.updateTask(task.id, updatedTask);
        setTask(updated);
        setIsCompleted(updated.completed);
      } catch (err) {
        console.log(err);
        setError('No se pudo actualizar el estado de la tarea.');
      }
    }
  };

  const handleVisibilityChange = async () => {
    if (task && task.id) {
      try {
        if (isShow) {
          await API_SERVICES.showTask(task.id);
        } else {
          await API_SERVICES.hideTask(task.id);
        }
        //setTask(updated);
        setIsShow(!isShow);
      } catch (err) {
        console.log(err);
        setError('No se pudo actualizar la visibilidad de la tarea.');
      }
    }
  };

  const handleSaveChanges = async () => {
    if (task && task.id) {
      const updatedTask = {
        ...task,
        title: editedTitle,
        description: editedDescription,
        completed: isCompleted,
        show: isShow,
      };
      try {
        const result = await API_SERVICES.updateTask(task.id, updatedTask);
        console.log(result);
        navigate('/tasks'); // Redirigir a la lista de tareas después de guardar los cambios
      } catch (err) {
        console.log(err);
        setError('No se pudieron guardar los cambios.');
      }
    }
  };

  const handleDelete = async () => {
    if (task && task.id) {
      try {
        await API_SERVICES.deleteTask(task.id);
        navigate('/tasks');
      } catch (err) {
        console.log(err);
        setError('No se pudo eliminar la tarea.');
      }
    }
  };

  if (error) return <p>{error}</p>;

  return (
    <div className="taskdetail-container">
      <h1 className="taskdetail-title">Task Detail</h1>
      {task && (
        <>
        <p className="taskdetail-id">ID: {task.id}</p>
          <div className="taskdetail-inputs">
            <label>Título</label>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <label>Descripción</label>
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </div>
          
          <div className="taskdetail-status">
            <p>Estado: {isCompleted ? 'Completada' : 'Pendiente'}</p>
            <button onClick={handleStatusChange}>
              {isCompleted ? 'Marcar como Pendiente' : 'Marcar como Completada'}
            </button>
          </div>
          <div className="taskdetail-visibility">
            <p>Visibilidad: {isShow ? 'Visible' : 'Oculto'}</p>
            <button onClick={handleVisibilityChange}>
              {isShow ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>
          <button className="taskdetail-button" onClick={handleSaveChanges}>
            Guardar cambios
          </button>
          <button className="taskdetail-button" onClick={handleDelete}>
            Eliminar
          </button>
        </>
      )}
    </div>
  );
};
