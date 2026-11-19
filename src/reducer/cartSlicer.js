import { createSlice } from "@reduxjs/toolkit";

const cartSlicer = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    newBuy(state, action) {
      const foundedProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (foundedProduct) {
        foundedProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    dontBuy(state, action) {
      const foundedProduct = state.cart.find(
        (item) => item.id === action.payload
      );
      if (!foundedProduct) return;

      if (foundedProduct.quantity > 1) {
        foundedProduct.quantity -= 1;
      } else {
        state.cart = state.cart.filter((el) => el.id !== foundedProduct.id);
      }
    },

    cancelBuy(state, action) {
      // 1. Mahsulot savatda borligini tekshiramiz
      const foundedProduct = state.cart.find(
        (item) => item.id === action.payload
      );

      // 2. Agar mahsulot topilmasa, funksiyadan chiqib ketamiz
      if (!foundedProduct) return;

      // 3. Mahsulot topilsa, uni savatdan butunlay o'chiramiz
      state.cart = state.cart.filter((el) => el.id !== foundedProduct.id);
    },
  },
});

export const { newBuy, dontBuy, cancelBuy } = cartSlicer.actions;
export default cartSlicer.reducer; cancelBuy