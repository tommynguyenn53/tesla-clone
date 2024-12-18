import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice'; // Adjust path if needed

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
