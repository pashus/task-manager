import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';
import type { IData } from '@/data/data';
import { useNavigate } from 'react-router-dom';

function TaskItem({ cardData }: { cardData: IData }) {
  const navigate = useNavigate();
  const id = cardData.id;

  function onEditButton() {
    navigate(`/task/${id}`);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{cardData.title}</CardTitle>
        <CardDescription>{cardData.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="flex gap-2">
          <div className="rounded-md border-2 border-amber-400 bg-amber-400 px-1 text-sm">
            <p className="leading-7 [&:not(:first-child)]:mt-6">{cardData.category}</p>
          </div>
          <div className="rounded-md border border-amber-400 bg-amber-400 px-1 text-sm">
            <p className="leading-7 [&:not(:first-child)]:mt-6">{cardData.status}</p>
          </div>
        </div>
        <CardAction>
          <Button onClick={() => onEditButton()} variant="outline" className="cursor-pointer">
            Edit
          </Button>
        </CardAction>
      </CardContent>
    </Card>
  );
}

export default TaskItem;
