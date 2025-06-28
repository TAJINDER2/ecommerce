import { createSlice } from '@reduxjs/toolkit';
import nike from '../../assets/nike.png';
import adidas from '../../assets/adidas.jpg';
import puma from '../../assets/puma.jpg';

const initialState = {
  list: [
    { id: '1', name: 'Nike Air Max', price: 149.99, image: nike },
    { id: '2', name: 'Adidas Ultraboost', price: 159.99, image: adidas },
    { id: '3', name: 'Puma RS-X', price: 129.99, image: puma },
  ],
  searchQuery: '',
};

const shoesSlice = createSlice({
  name: 'shoes',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = shoesSlice.actions;
export default shoesSlice.reducer;