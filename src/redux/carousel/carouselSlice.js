
import { createSlice } from "@reduxjs/toolkit";
import Data from '../../SliderData'

const initialState = {
  sliderData: [] ,
  current:0
};

export const carouselSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {

    setData: (state, action) => {
      state.sliderData = action.payload
    },

    nextSlide: (state) => {
      state.current += 1
    },

    previousSlide: (state) => {
      state.current -= 1
    },
    
  },
});

export const {
  nextSlide,
  previousSlide,
  setData
} = carouselSlice.actions;

export const sliderData = (state) => state.carousel.sliderData;
export const current = (state) => state.carousel.current;

export default carouselSlice.reducer;
