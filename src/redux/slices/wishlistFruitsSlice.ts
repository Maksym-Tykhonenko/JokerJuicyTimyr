import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const wishlistFruitsSlice = createSlice({
    name: 'wishlistFruits',
    initialState,
    reducers: {
        addWishlistFruit: (state, action) => {
            state.push(action.payload);
        },
        clearTriedFruits2: () => {
            return [];
        },
    },
});

export const { addWishlistFruit, clearTriedFruits2 } = wishlistFruitsSlice.actions;
export default wishlistFruitsSlice.reducer;
