import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    stock: number;
  }

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      if (!state.cart.find((item) => item.id === action.payload.id)) {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
