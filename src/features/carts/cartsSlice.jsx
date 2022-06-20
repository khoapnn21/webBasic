import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartsSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addCarts: (state, action) => {
            const newState = [...state];

            return newState.concat(action.payload);
        },
    },
});

export const { addCarts } = cartsSlice.actions;

export default cartsSlice.reducer;
