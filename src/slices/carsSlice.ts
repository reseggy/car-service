import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCarsApi } from '../utils/api';
import { TCar } from '../types/types';

interface CarsState {
  cars: TCar[] | null;
  isLoading: boolean;
  error: string | undefined;
}

const initialState: CarsState = {
  cars: null,
  isLoading: false,
  error: undefined
};

export const fetchCars = createAsyncThunk('car/fetchCars', async () => {
  const response = await getCarsApi();
  return response;
});

const carsSlice = createSlice({
  name: 'getCars',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export default carsSlice.reducer;
