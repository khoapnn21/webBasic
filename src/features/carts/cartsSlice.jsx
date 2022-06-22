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
        decreaseCarts: (state, action) => {
            const newState = state.map((s) => {
                if (s.productId === action.payload.id) {
                    return { ...s, quantity: action.payload.quantity - 1 };
                } else {
                    return s;
                }
            });
            return newState;
        },
        increaseCarts: (state, action) => {
            const newState = state.map((s) => {
                if (s.productId === action.payload.id) {
                    return { ...s, quantity: action.payload.quantity + 1 };
                } else {
                    return s;
                }
            });
            return newState;
        },
        deleteCarts: (state, action) => {
            const newState = state.filter(
                (s) => s.productId !== action.payload.id,
            );
            return newState;
        },
    },
});

export const { addCarts, decreaseCarts, increaseCarts, deleteCarts } =
    cartsSlice.actions;

export default cartsSlice.reducer;
