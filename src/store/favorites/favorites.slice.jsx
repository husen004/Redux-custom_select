import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const FavoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, {payload: recipe}) => {
            const isExist = state.some(r => r.id === recipe.id)

            if (isExist) {
                const index = state.findIndex(r => r.id === recipe.id)
                if (index !== -1) {
                    state.splice(index, 1)
                }
            } else {
                state.push(recipe)
            }
        }
    } 
})

export const { actions, reducer } = FavoritesSlice