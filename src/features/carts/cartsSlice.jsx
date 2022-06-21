import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartsSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addCarts: (state, action) => {
            const newState = [...state];
            const subState = newState.concat(action.payload);
            return subState;
        },
    },
});

export const { addCarts } = cartsSlice.actions;

export default cartsSlice.reducer;
