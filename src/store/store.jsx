import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from "./favorites/favorites.slice";
import { userSlice } from "./user/use.slice";

const reducers = combineReducers({
    favorites: favoritesReducer,
    user: userSlice.reducer,
    [api.reducerPath]: api.reducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})