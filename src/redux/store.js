import { rootReducer } from 'redux/tasksSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({ reducer: rootReducer });
