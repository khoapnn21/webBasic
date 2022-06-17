import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers: (state, action) => {
            const newState = [...state];
            return newState.concat(action.payload);
        },
    },
});

export const { addUsers } = usersSlice.actions;

export default usersSlice.reducer;
