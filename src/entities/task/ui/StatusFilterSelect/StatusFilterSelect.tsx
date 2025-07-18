import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { SelectGroup } from '@radix-ui/react-select';

interface Props {
  status: string;
  setStatus: (value: string) => void;
}

export function StatusFilterSelect({ status, setStatus }: Props) {
  return (
    <div>
      <Select value={status} onValueChange={setStatus}>
        <SelectTrigger className="text-md w-full cursor-pointer py-6 sm:w-28 sm:py-2 sm:text-sm">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Status</SelectLabel>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="todo">To Do</SelectItem>
            <SelectItem value="inProgress">In Progress</SelectItem>
            <SelectItem value="done">Done</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
