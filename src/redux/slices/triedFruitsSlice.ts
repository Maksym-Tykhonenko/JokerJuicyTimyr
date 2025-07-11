import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const triedFruitsSlice = createSlice({
    name: 'triedFruits',
    initialState,
    reducers: {
        addTriedFruit: (state, action) => {
            state.push(action.payload);
        },
        clearTriedFruits: () => {
            return [];
        },
    },
});

export const { addTriedFruit, clearTriedFruits } = triedFruitsSlice.actions;
export default triedFruitsSlice.reducer;
