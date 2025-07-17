import { Button } from '@/shared/ui/button';
import { useNavigate } from 'react-router-dom';

export function CreateTaskButton() {
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
