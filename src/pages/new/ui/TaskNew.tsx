import { createTask } from '@/entities/task/model';
import { useNavigate } from 'react-router-dom';
import type { IData } from '@/shared/model/types';
import { TaskForm } from '@/entities/task';
import { useAppDispatch } from '@/app/store/store';

export function TaskNew() {
  const dispatch = useAppDispatch();
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
