import { useNavigate, useParams } from 'react-router-dom';
import { getTaskById, updateTask } from '@/entities/task/model';
import type { IData } from '@/shared/model/types';
import { TaskForm } from '@/entities/task';
import type { RootState } from '@/app/store';
import { useAppDispatch, useAppSelector } from '@/app/store/store';

export function TaskDetails() {
  const { id } = useParams();
  const taskId = Number(id);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const task = useAppSelector((state: RootState) => getTaskById(state, taskId));

  function handleSaveTask(data: IData) {
    if (!task) return;
    dispatch(
      updateTask({
        ...data,
        id: task.id,
      })
    );
    navigate('/');
  }

  return (
    <div className="mx-2">
      <h2 className="mb-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Task details
      </h2>
      <TaskForm onSubmit={handleSaveTask} task={task} />
    </div>
  );
}
