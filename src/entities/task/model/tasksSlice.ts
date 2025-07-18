import type { IData } from '@/shared/model/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const loadFromLocalStorage = (): IData[] => {
  const data = localStorage.getItem('tasks');
  return data ? JSON.parse(data) : [];
};

const saveToLocalStorage = (tasks: IData[]) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

interface ITasksState {
  tasks: IData[];
}

const initialState: ITasksState = {
  tasks: loadFromLocalStorage(),
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
      saveToLocalStorage(state.tasks);
    },

    createTask(state, action: PayloadAction<IData>) {
      state.tasks.push(action.payload);
      saveToLocalStorage(state.tasks);
    },

    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter((i) => i.id !== action.payload);
      saveToLocalStorage(state.tasks);
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
export const tasksReducer = tasksSlice.reducer;
