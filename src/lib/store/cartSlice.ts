import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../data/products";

// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   stock: number;
// }

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (!existingItem) {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity < item.stock) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;