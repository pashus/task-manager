import { Button } from '@/shared/ui/button';
import { useNavigate } from 'react-router-dom';

export function CreateTaskButton() {
  const navigate = useNavigate();
  function handleOpenCreateForm() {
    navigate('task/new');
  }

  return (
    <Button onClick={handleOpenCreateForm} className="w-76 cursor-pointer self-center sm:w-25">
      Create task
    </Button>
  );
}
