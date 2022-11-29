import { configureStore } from '@reduxjs/toolkit';
import { tokenReducer } from 'entities/token';

export const store = configureStore({
  reducer: {
    tokens: tokenReducer,
  },
});

export type AppDispatch = typeof store['dispatch'];
