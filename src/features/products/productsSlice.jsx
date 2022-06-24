import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: (state, action) => {
            const newState = [...state];
            const subState = newState.concat(action.payload);
            return subState;
        },
        editProducts: (state, action) => {
            const newState = [...state];
            const subState = newState.filter((s) => {
                if (action.payload === '') {
                    return s;
                } else {
                    const resultProduct = s.title
                        .toLowerCase()
                        .includes(action.payload);
                    return resultProduct;
                }
            });
            return subState;
        },
    },
});

export const { addProducts, editProducts } = productsSlice.actions;

export default productsSlice.reducer;
