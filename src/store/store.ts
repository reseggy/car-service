import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import carsSlice from '../slices/carsSlice';
import feedbacksSlice from '../slices/feedbacksSlice';
import servicesSlice from '../slices/servicesSlice';

export const rootReducer = combineReducers({
  cars: carsSlice,
  feedbacks: feedbacksSlice,
  services: servicesSlice
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
