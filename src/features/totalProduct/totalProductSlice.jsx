import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const totalProductSlice = createSlice({
    name: 'totalProducts',
    initialState,
    reducers: {
        addTotalProducts: (state, action) => {
            const newState = [...state];
            return newState.concat(action.payload);
        },
        editTotalProducts: (state, action) => {},
    },
});

export const { addTotalProducts } = totalProductSlice.actions;

export default totalProductSlice.reducer;
