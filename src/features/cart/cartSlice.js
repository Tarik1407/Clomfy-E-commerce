import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      console.log(item);

      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart save", JSON.stringify(state));
      toast.success("Added product into cart!");
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      console.log(state, "state func");
    },
    editItem: (state, action) => {
      console.log(state, "state func");
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
