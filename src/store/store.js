import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from "../reducer/cartSlicer"

export const store = configureStore({
  reducer: {
    data: cartSlicer
  }
})