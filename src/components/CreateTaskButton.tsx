import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

function CreateTaskButton() {
  const navigate = useNavigate();
  function handleOpenCreateForm() {
    navigate('task/new');
  }

  return (
    <Button onClick={handleOpenCreateForm} className="cursor-pointer">
      Create task
    </Button>
  );
}

export default CreateTaskButton;
