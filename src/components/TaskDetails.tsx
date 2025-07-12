import { useParams } from 'react-router-dom';
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

function TaskDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="mb-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Task details
      </h2>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label className="font-semibold" htmlFor="title">
            Title
          </Label>
          <Input id="title" type="text" placeholder="Required Title" />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="font-semibold" htmlFor="desc">
            Description
          </Label>
          <Input id="desc" type="text" placeholder="Optional description" />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="font-semibold" htmlFor="category">
            Category
          </Label>
          <Select>
            <SelectTrigger id="category" className="w-full cursor-pointer">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
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
          <Select>
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
          <Select>
            <SelectTrigger id="priority" className="w-full cursor-pointer">
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Priority</SelectLabel>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="meduim">Medium </SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </form>
    </div>
  );
}

export default TaskDetails;
