import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const defaultValue = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0.1,
  orderTotal: 0,
};

const getDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cartSave")) || defaultValue;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getDataFromLocalStorage,
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
      cartSlice.caseReducers.calculateTotals();
      toast.success("Added product into cart!");
    },

    clearCart: (state) => {
      localStorage.setItem("cartSave", JSON.stringify(defaultValue));
      return defaultValue;
    },
    removeItem: (state, action) => {
      console.log(state, "state func");
    },
    editItem: (state, action) => {
      console.log(state, "state func");
    },
    calculateTotals: (state) => {
      state.tax = state.tax * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cartSave", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
