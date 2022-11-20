import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addContact, deleteContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
  visibleContacts: [],
};
const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
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
    [fetchTasks.pending]: handlePending,
    [fetchTasks.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchTasks.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        task => task.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const rootReducer = tasksSlice.reducer;
export const { filterTask } = tasksSlice.actions;
