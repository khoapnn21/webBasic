import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: (state, action) => {
            const newState = [...state];
            return newState.concat(action.payload);
        },
    },
});

export const { addProducts } = productsSlice.actions;

export default productsSlice.reducer;
