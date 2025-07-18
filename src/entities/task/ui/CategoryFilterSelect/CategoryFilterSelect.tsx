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
  category: string;
  setCategory: (value: string) => void;
}

export function CategoryFilterSelect({ category, setCategory }: Props) {
  return (
    <div>
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="text-md w-full cursor-pointer py-6 sm:w-28 sm:py-2 sm:text-sm">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Category</SelectLabel>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="bug">Bug</SelectItem>
            <SelectItem value="feature">Feature</SelectItem>
            <SelectItem value="documentation">Documentation</SelectItem>
            <SelectItem value="refactor">Refactor</SelectItem>
            <SelectItem value="test">Test</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
