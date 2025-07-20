import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import {
  categoryColor,
  categoryLabel,
  priorityColor,
  priorityLabel,
  statusColor,
  statusLabel,
} from '@/shared/model/constatns';
import { useNavigate } from 'react-router-dom';
import { deleteTask } from '@/entities/task/model';
import { Edit, Trash } from '@mynaui/icons-react';
import { Button } from '@/shared/ui/button';
import type { IData } from '@/shared/model';
import { useAppDispatch } from '@/app/store';

export function TaskItem({ cardData }: { cardData: IData }) {
  const navigate = useNavigate();
  const id = cardData.id;

  const dispatch = useAppDispatch();

  function onEditButton() {
    navigate(`/task/${id}`);
  }

  function onDeleteButton() {
    dispatch(deleteTask(id));
  }

  function formatDate(date: string) {
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
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
        <p className="text-sm leading-7">{formatDate(cardData.date)}</p>
        {cardData.priority && (
          <div className={`rounded-md border px-1 text-sm ${priorityColor[cardData.priority]}`}>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {priorityLabel[cardData.priority]}
            </p>
          </div>
        )}
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="flex gap-2">
          {cardData.category && (
            <div className={`rounded-md border px-1 text-sm ${categoryColor[cardData.category]}`}>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                {categoryLabel[cardData.category]}
              </p>
            </div>
          )}
          {cardData.status && (
            <div className={`rounded-md border px-1 text-sm ${statusColor[cardData.status]}`}>
              <p className="leading-7 [&:not(:first-child)]:mt-6">{statusLabel[cardData.status]}</p>
            </div>
          )}
        </div>
        <CardAction className="flex gap-1">
          <Button
            size="sm"
            onClick={() => onEditButton()}
            variant="outline"
            className="cursor-pointer"
          >
            <Edit />
          </Button>
          <Button
            size="sm"
            onClick={onDeleteButton}
            variant="destructive"
            className="cursor-pointer bg-red-500"
          >
            <Trash />
          </Button>
        </CardAction>
      </CardContent>
    </Card>
  );
}
