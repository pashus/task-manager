import type { IData } from '@/types/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ITasksState {
  tasks: IData[];
}

const initialState: ITasksState = {
  tasks: [
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
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    updateTask(state, action: PayloadAction<IData>) {
      const index = state.tasks.findIndex((i) => i.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },

    createTask(state, action: PayloadAction<IData>) {
      state.tasks.push(action.payload);
    },

    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter((i) => i.id !== action.payload);
    },
  },
  selectors: {
    getTasks: (state) => {
      return state.tasks;
    },
    getTaskById: (state, id: number) => state.tasks.find((t) => t.id === id),
  },
});

export const { updateTask, createTask, deleteTask } = tasksSlice.actions;
export const { getTasks, getTaskById } = tasksSlice.selectors;
export default tasksSlice.reducer;
