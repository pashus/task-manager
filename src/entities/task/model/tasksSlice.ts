import type { IData } from '@/shared/model/types';
import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk('tasks/fetchAll', async () => {
  const res = await fetch('/api/tasks');
  return await res.json();
});

export const createTask = createAsyncThunk('tasks/create', async (task: IData) => {
  const res = await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  return await res.json();
});

export const fetchTaskById = createAsyncThunk('tasks/getById', async (id: number) => {
  const res = await fetch(`/api/tasks/${id}`);
  const data = await res.json();
  return data;
});

export const updateTask = createAsyncThunk('tasks/update', async (task: IData) => {
  const res = await fetch(`/api/tasks/${task.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  return await res.json();
});

export const deleteTask = createAsyncThunk('tasks/delete', async (id: number) => {
  await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
  return id;
});

interface ITasksState {
  tasks: IData[];
  loading: boolean;
}

const initialState: ITasksState = {
  tasks: [],
  loading: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<IData[]>) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(createTask.fulfilled, (state, action: PayloadAction<IData>) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action: PayloadAction<IData>) => {
        const idx = state.tasks.findIndex((t) => t.id === action.payload.id);
        if (idx !== -1) state.tasks[idx] = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action: PayloadAction<number>) => {
        state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      })
      .addCase(fetchTaskById.fulfilled, (state, action: PayloadAction<IData>) => {
        const existing = state.tasks.find((t) => t.id === action.payload.id);
        if (!existing) {
          state.tasks.push(action.payload);
        } else {
          Object.assign(existing, action.payload);
        }
      });
  },
  selectors: {
    getTasks: (state) => {
      return state.tasks;
    },
    getLoading: (state) => {
      return state.loading;
    },
    getTaskById: (state, id: number) => state.tasks.find((t) => t.id === id),
  },
});

export const { getTasks, getLoading, getTaskById } = tasksSlice.selectors;
export const tasksReducer = tasksSlice.reducer;
