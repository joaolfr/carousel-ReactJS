
import { createSlice } from "@reduxjs/toolkit";
import Data from '../../SliderData'

const initialState = {
  sliderData: Data ,
  current:0
};

export const carouselSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
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
 
} = carouselSlice.actions;

export const sliderData = (state) => state.carousel.sliderData;
export const current = (state) => state.carousel.current;

export default carouselSlice.reducer;
