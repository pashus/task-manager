import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';
import {
  categoryColor,
  categoryLabel,
  priorityColor,
  priorityLabel,
  statusColor,
  statusLabel,
} from '@/constants/constatns';
import { useNavigate } from 'react-router-dom';
import type { IData } from '@/types/types';

function TaskItem({ cardData }: { cardData: IData }) {
  const navigate = useNavigate();
  const id = cardData.id;

  function onEditButton() {
    navigate(`/task/${id}`);
  }

  return (
    <Card>
      <CardHeader className="flex justify-between">
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <CardTitle>{cardData.title}</CardTitle>
          <CardDescription className="truncate overflow-hidden whitespace-nowrap">
            {cardData.description}
          </CardDescription>
        </div>
        <div className={`rounded-md border px-1 text-sm ${priorityColor[cardData.priority]}`}>
          <p className="leading-7 [&:not(:first-child)]:mt-6">{priorityLabel[cardData.priority]}</p>
        </div>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="flex gap-2">
          <div className={`rounded-md border px-1 text-sm ${categoryColor[cardData.category]}`}>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {categoryLabel[cardData.category]}
            </p>
          </div>
          <div className={`rounded-md border px-1 text-sm ${statusColor[cardData.status]}`}>
            <p className="leading-7 [&:not(:first-child)]:mt-6">{statusLabel[cardData.status]}</p>
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
