import { api } from "./api";

export const recipeApi = api.injectEndpoints({
    endpoints: builder => ({
        createRecipe: builder.mutation({
            query: recipe => ({
             body: recipe,
             url: '/',
             method: 'POST',
            })
        }),
    }),
}) 


