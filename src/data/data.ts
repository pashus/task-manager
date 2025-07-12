export interface IData {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
  priority: string;
}

const data: IData[] = [
  {
    id: 0,
    title: 'Card',
    description: 'Some description',
    category: 'Bug',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: 1,
    title: 'Card 2',
    description: 'Another description',
    category: 'Feature',
    status: 'Done',
    priority: 'Low',
  },
  {
    id: 2,
    title: 'Card 3',
    description: 'Another description',
    category: 'Feature',
    status: 'Done',
    priority: 'Low',
  },
  {
    id: 3,
    title: 'Card 4',
    description: 'Another description',
    category: 'Feature',
    status: 'Done',
    priority: 'Low',
  },
];

export default data;
