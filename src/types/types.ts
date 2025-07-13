export type Category = 'bug' | 'feature' | 'documentation' | 'refactor' | 'test';
export type Status = 'todo' | 'inProgress' | 'done';
export type Priority = 'low' | 'medium' | 'high';

export interface IData {
  id: number;
  title: string;
  description: string;
  category: Category;
  status: Status;
  priority: Priority;
}
