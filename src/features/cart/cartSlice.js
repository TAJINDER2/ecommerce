import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find(i => i.id === action.payload.id);
      if (itemInCart) {
        itemInCart.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    incrementQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.qty += 1;
    },
    decrementQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    }
  },
});

export const { addToCart, removeFromCart, clearCart, incrementQty, decrementQty } = cartSlice.actions;
export default cartSlice.reducer;
