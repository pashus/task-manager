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
  priority: string;
  setPriority: (value: string) => void;
}

export function PriorityFilterSelect({ priority, setPriority }: Props) {
  return (
    <div>
      <Select value={priority} onValueChange={setPriority}>
        <SelectTrigger className="text-md w-full cursor-pointer py-6 sm:w-28 sm:py-2 sm:text-sm">
          <SelectValue placeholder="Priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Priority</SelectLabel>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
