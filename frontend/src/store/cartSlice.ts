import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  name: string;
  categories: [];
  description: string;
  price: number;
  image: string;
  newProducts: boolean;
  mostSold: boolean;
  quantity: number;
};

const savedCart = localStorage.getItem("cart");

const initialState: CartItem[] = savedCart ? JSON.parse(savedCart) : [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id,
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      return state.filter((product) => product.id !== action.payload);
    },

    clearCart: () => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
