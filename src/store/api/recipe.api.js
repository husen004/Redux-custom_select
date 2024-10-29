import { api } from "./api";

export const recipeApi = api.injectEndpoints({
    endpoints: builder => ({
        getRecipe: builder.query({
            query: () => '/',
        }),
        createRecipe: builder.mutation({
            query: (recipe) => ({
                body: (recipe) => ({
                    body: recipe,
                    url: '/',
                    method: 'POST',
                })
            }),
        }),
    }),
}) 


