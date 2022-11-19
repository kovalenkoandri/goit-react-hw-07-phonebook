import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: '',
  visibleContacts: [],
};
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    rmTask(state, action) {
      const index = state.contacts.items.findIndex(
        task => task.id === action.payload
      );
      state.contacts.items.splice(index, 1);
    },
    filterTask(state, action) {
      const filter = action.payload;
      const visibleContacts = state.contacts.items.filter(element =>
        element.name
          .toLocaleUpperCase()
          .includes(action.payload.toLocaleUpperCase())
      );
      return { ...state, filter, visibleContacts };
    },
  },
  extraReducers: {
    [fetchTasks.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [addTask.pending](state) {
      state.contacts.isLoading = true;
    },
    [addTask.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addTask.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

export const rootReducer = tasksSlice.reducer;
export const {
  rmTask,
  filterTask,
} = tasksSlice.actions;
