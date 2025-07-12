import data from '@/data/data';
import TaskItem from './TaskItem';

function TaskList() {
  return (
    <div>
      <h2 className="mb-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Task list
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <TaskItem key={item.id} cardData={item} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
