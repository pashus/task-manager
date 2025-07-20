import { getTasks } from '@/entities/task/model';
import {
  CategoryFilterSelect,
  CreateTaskButton,
  PriorityFilterSelect,
  SortTaskSelect,
  StatusFilterSelect,
  TaskItem,
} from '@/entities/task';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/store';
import { fetchTasks } from '@/entities/task/model/tasksSlice';

export function TaskList() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const tasks = useAppSelector(getTasks);
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  const filteredTasks = tasks.filter(
    (task) =>
      (priority === 'all' || priority === '' || task.priority === priority) &&
      (status === 'all' || status === '' || task.status === status) &&
      (category === 'all' || category === '' || task.category === category)
  );

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sort === 'date') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    if (sort === 'priority') {
      const priorityOrder = { high: 1, medium: 2, low: 3 };
      return (
        priorityOrder[b.priority as keyof typeof priorityOrder] -
        priorityOrder[a.priority as keyof typeof priorityOrder]
      );
    }
    if (sort === 'title') {
      return a.title.localeCompare(b.title);
    }

    return 0;
  });

  return (
    <div className="mx-2">
      <h2 className="mb-2 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Task list
      </h2>
      <div className="mb-2 flex flex-col justify-between gap-4 sm:flex-row">
        <div className="flex flex-col gap-1 sm:flex-row">
          <CategoryFilterSelect category={category} setCategory={setCategory} />
          <StatusFilterSelect status={status} setStatus={setStatus} />
          <PriorityFilterSelect priority={priority} setPriority={setPriority} />
          <SortTaskSelect sort={sort} setSort={setSort} />
        </div>
        <CreateTaskButton />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedTasks.map((item) => (
          <TaskItem key={item.id} cardData={item} />
        ))}
      </div>
    </div>
  );
}
