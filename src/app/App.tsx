import { Route, Routes } from 'react-router-dom';
import { TaskNew } from '@/pages/new';
import { TaskList } from '@/pages/list';
import { TaskDetails } from '@/pages/details';

function App() {
  return (
    <div className="container mx-auto mb-4">
      <h1 className="mb-4 scroll-m-20 pt-2 text-center text-4xl font-extrabold tracking-tight text-balance">
        TASK MANAGER
      </h1>

      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskDetails />} />
        <Route path="/task/new" element={<TaskNew />} />
      </Routes>
    </div>
  );
}

export default App;
