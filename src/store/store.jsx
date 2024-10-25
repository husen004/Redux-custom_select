import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from "./favorites/favorites.slice";

const reducers = combineReducers({
    favorites: favoritesReducer,
    users: userSlice
});

export const store = configureStore({
    reducer: reducers
})