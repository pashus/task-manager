import { useNavigate, useParams } from 'react-router-dom';
import { Label } from './ui/label';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskById, updateTask } from '@/features/tasksSlice';
import type { RootState } from '@/store/store';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

function TaskDetails() {
  const { id } = useParams();
  const taskId = Number(id);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const task = useSelector((state: RootState) => getTaskById(state, taskId));

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setCategory(task.category);
      setStatus(task.status);
      setPriority(task.priority);
    }
  }, [task]);

  function handleSave() {
    if (!task) return;
    dispatch(
      updateTask({
        ...task,
        title,
        description,
        category,
        status,
        priority,
      })
    );
    navigate('/');
  }

  return (
    <div>
      <h2 className="mb-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Task details
      </h2>
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
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger id="category" className="w-full cursor-pointer">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="Bug">Bug</SelectItem>
                <SelectItem value="Feature">Feature</SelectItem>
                <SelectItem value="Documentation">Documentation</SelectItem>
                <SelectItem value="Refactor">Refactor</SelectItem>
                <SelectItem value="Test">Test</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="font-semibold" htmlFor="status">
            Status
          </Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger id="status" className="w-full cursor-pointer">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="To Do">To Do</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Done">Done</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="font-semibold" htmlFor="priority">
            Priority
          </Label>
          <Select value={priority} onValueChange={setPriority}>
            <SelectTrigger
              id="priority"
              className={cn(
                'w-full cursor-pointer',
                !priority && 'border-red-500 ring-1 ring-red-500'
              )}
            >
              {' '}
              //решить проблему с селектом и ошибкой мб
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Priority</SelectLabel>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Meduim">Medium </SelectItem>
                <SelectItem value="High">High</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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

export default TaskDetails;
