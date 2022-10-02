import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    counter: counterReducer,
  },

  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
});
