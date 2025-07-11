import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { combineReducers } from 'redux';
import triedFruitsReducer from './slices/triedFruitsSlice';
import wishlistFruitsReducer from './slices/wishlistFruitsSlice';

const rootReducer = combineReducers({
  triedFruits: triedFruitsReducer,
  wishlistFruits: wishlistFruitsReducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
