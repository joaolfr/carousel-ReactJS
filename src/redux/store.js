import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./carousel/carouselSlice";

export const store = configureStore({
  reducer: {
    carousel: carouselReducer,
  },
});
