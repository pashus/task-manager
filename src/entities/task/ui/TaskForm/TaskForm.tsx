import type { Category, Status, Priority, IData } from '@/shared/model/types';
import { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { useNavigate } from 'react-router-dom';

interface Props {
  task?: IData;
  onSubmit: (data: IData) => void;
}

export function TaskForm({ onSubmit, task }: Props) {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<Category | ''>('');
  const [status, setStatus] = useState<Status | ''>('');
  const [priority, setPriority] = useState<Priority | ''>('');
  const [date, setDate] = useState(() => getTodayDate());

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setCategory(task.category);
      setStatus(task.status);
      setPriority(task.priority);
      setDate(task.date);
    }
  }, [task]);

  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function handleSave() {
    onSubmit({ title, description, category, status, priority, date } as IData);
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="mb-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label className="font-semibold" htmlFor="title">
            Title
          </Label>
          <Input
            value={title}
            id="title"
            type="text"
            placeholder="Required Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="font-semibold" htmlFor="description">
            Description
          </Label>
          <Input
            value={description}
            id="description"
            type="text"
            placeholder="Optional description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="font-semibold" htmlFor="category">
            Category
          </Label>
          <Select
            key={category}
            value={category}
            onValueChange={(value: Category) => setCategory(value)}
          >
            <SelectTrigger id="category" className="w-full cursor-pointer">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="bug">Bug</SelectItem>
                <SelectItem value="feature">Feature</SelectItem>
                <SelectItem value="documentation">Documentation</SelectItem>
                <SelectItem value="refactor">Refactor</SelectItem>
                <SelectItem value="test">Test</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="font-semibold" htmlFor="status">
            Status
          </Label>
          <Select key={status} value={status} onValueChange={(value: Status) => setStatus(value)}>
            <SelectTrigger id="status" className="w-full cursor-pointer">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="todo">To Do</SelectItem>
                <SelectItem value="inProgress">In Progress</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="font-semibold" htmlFor="priority">
            Priority
          </Label>
          <Select
            key={priority}
            value={priority}
            onValueChange={(value: Priority) => setPriority(value)}
          >
            <SelectTrigger id="priority" className={'w-full cursor-pointer'}>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Priority</SelectLabel>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium </SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="font-semibold" htmlFor="date">
            Date
          </Label>
          <Input
            value={date}
            id="date"
            type="date"
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </form>
      <div className="flex gap-2">
        <Button
          disabled={!category || !status || !priority || !title}
          className="cursor-pointer"
          onClick={handleSave}
        >
          Сохранить
        </Button>
        <Button className="cursor-pointer" variant="outline" onClick={() => navigate('/')}>
          Отмена
        </Button>
      </div>
    </div>
  );
}
