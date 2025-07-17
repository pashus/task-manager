import { useSelector } from 'react-redux';
import { getTasks } from '@/entities/task/model';
import { CreateTaskButton, TaskItem } from '@/entities/task';

export function TaskList() {
  const tasks = useSelector(getTasks);

  return (
    <div className="mx-2">
      <h2 className="mb-2 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Task list
      </h2>
      <div className="mb-2 flex justify-end">
        <CreateTaskButton />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tasks.map((item) => (
          <TaskItem key={item.id} cardData={item} />
        ))}
      </div>
    </div>
  );
}
