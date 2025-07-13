import type { IData } from '@/types/types';

const data: IData[] = [
  {
    id: 1,
    title: 'Card',
    description: 'Some description',
    category: 'test',
    status: 'inProgress',
    priority: 'high',
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'Another descriptionAnother descriptionAnother descriptionAnother description',
    category: 'feature',
    status: 'done',
    priority: 'low',
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'Another description',
    category: 'test',
    status: 'todo',
    priority: 'low',
  },
  {
    id: 4,
    title: 'Card 4',
    description: 'Another description',
    category: 'documentation',
    status: 'inProgress',
    priority: 'medium',
  },
  {
    id: 5,
    title: 'Card 5',
    description: 'Another description',
    category: 'refactor',
    status: 'done',
    priority: 'low',
  },
];

export default data;
