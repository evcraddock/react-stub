import { configureStore, combineReducers } from '@reduxjs/toolkit';

import layoutReducer from './layoutSlice';
import { baseApi } from './baseApi';

const reducers = combineReducers({
  layout: layoutReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
