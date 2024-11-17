import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFeedbacksApi } from '../utils/api';
import { TFeedbacks } from '../types/types';

interface FeedbacksState {
  feedbacks: TFeedbacks[] | null;
  isLoading: boolean;
  error: string | undefined;
}

const initialState: FeedbacksState = {
  feedbacks: null,
  isLoading: false,
  error: undefined
};

export const fetchFeedbacks = createAsyncThunk(
  'feedbacks/fetchFeedbacks',
  async () => {
    const response = await getFeedbacksApi();
    return response;
  }
);

const feedbacksSlice = createSlice({
  name: 'getFeedbacks',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeedbacks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFeedbacks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.feedbacks = action.payload;
      })
      .addCase(fetchFeedbacks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export default feedbacksSlice.reducer;
