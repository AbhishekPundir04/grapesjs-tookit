import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { cleanObject } from '../../../../utils/commonFunctions';
import { GET } from '../../../../services/api';
import Endpoints from '../../../../constants/EndPoints';


// Async thunk for fetching event list
export const getEventList = createAsyncThunk(
  'events/getEventList',
  async (payload, { rejectWithValue }) => {
    try {
      const cleanedPayload = cleanObject(payload);
      const response = await GET(`${Endpoints.VERSION}${Endpoints.EVENT}`, cleanedPayload);
      return response?.data.result;
    } catch (error) {
      toast.error(error?.message || 'Failed to fetch events');
      return rejectWithValue(error?.message);
    }
  }
);

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    isLoading: false,
    eventList: null,
    eventDetails: null,
    msg: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEventList.pending, (state) => {
        state.isLoading = true;
        state.msg = '';
      })
      .addCase(getEventList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.eventList = action.payload;
        state.msg = '';
      })
      .addCase(getEventList.rejected, (state, action) => {
        state.isLoading = false;
        state.eventList = [];
        state.msg = action.payload;
      });
  },
});

export default eventSlice.reducer;
