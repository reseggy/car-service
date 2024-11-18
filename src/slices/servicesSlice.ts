import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getServicesApi } from '../utils/api';
import { TService } from '../types/types';

interface ServicesState {
  services: TService[] | null;
  isLoading: boolean;
  error: string | undefined;
}

const initialState: ServicesState = {
  services: null,
  isLoading: false,
  error: undefined
};

export const fetchServices = createAsyncThunk(
  'service/fetchServices',
  async () => {
    const response = await getServicesApi();
    return response;
  }
);

const servicesSlice = createSlice({
  name: 'getServices',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.services = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export default servicesSlice.reducer;
