// store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import loadingReducer from './slices/loaderSlice';
import eventReducer from "../redux/slices/PlacesSlice.js/eventSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    loadingReducer:loadingReducer,
    events: eventReducer,
  },
});

export default store;
