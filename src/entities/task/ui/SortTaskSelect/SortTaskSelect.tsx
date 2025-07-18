import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';

interface Props {
  sort: string;
  setSort: (value: string) => void;
}

export function SortTaskSelect({ sort, setSort }: Props) {
  return (
    <Select value={sort} onValueChange={setSort}>
      <SelectTrigger
        id="sort"
        className="text-md w-full cursor-pointer py-6 sm:w-24 sm:py-2 sm:text-sm"
      >
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort</SelectLabel>
          <SelectItem value="none">-</SelectItem>
          <SelectItem value="date">Date</SelectItem>
          <SelectItem value="priority">Priority </SelectItem>
          <SelectItem value="title">Title </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
