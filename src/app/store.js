import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import shoesReducer from '../features/shoes/shoesSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    shoes: shoesReducer,
  },
});