import { useDispatch } from 'react-redux';
import TaskForm from './TaskForm';
import { createTask } from '@/features/tasksSlice';
import { useNavigate } from 'react-router-dom';
import type { IData } from '@/types/types';

function TaskNew() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSaveTask(data: Omit<IData, 'id'>) {
    const newTask: IData = {
      id: Math.floor(Math.random() * 10_000_000),
      ...data,
    };
    dispatch(createTask(newTask));
    navigate('/');
  }

  return (
    <div className="mx-2">
      <h2 className="mb-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Task create
      </h2>
      <TaskForm onSubmit={handleSaveTask} />
    </div>
  );
}

export default TaskNew;
