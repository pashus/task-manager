import { Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="mb-4 scroll-m-20 pt-2 text-center text-4xl font-extrabold tracking-tight text-balance">
        TASK MANAGER
      </h1>

      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
    </div>
  );
}

export default App;
