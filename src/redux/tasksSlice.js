import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  // contacts: [],
  filter: '',
  visibleContacts: [],
};
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.contacts.items.push(action.payload);
      },
      prepare(name, number) {
        const id = nanoid();
        return {
          payload: { id, name, number },
        };
      },
    },
    rmTask(state, action) {
      const index = state.contacts.findIndex(
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
});

export const rootReducer = tasksSlice.reducer;
export const { addTask, rmTask, filterTask } = tasksSlice.actions;
