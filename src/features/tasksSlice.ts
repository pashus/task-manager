import type { IData } from '@/types/types';
import data from '@/data/data';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ITasksState {
  tasks: IData[];
}

const initialState: ITasksState = {
  tasks: data,
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
  },
  selectors: {
    getTasks: (state) => {
      return state.tasks;
    },
    getTaskById: (state, id: number) => state.tasks.find((t) => t.id === id),
  },
});

export const { updateTask } = tasksSlice.actions;
export const { getTasks, getTaskById } = tasksSlice.selectors;
export default tasksSlice.reducer;
