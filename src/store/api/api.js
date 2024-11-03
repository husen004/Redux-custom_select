import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 

const API_URL = "http://localhost:3000/recipes"

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({
        getRecipes: builder.query({
            query: () => '/',
        }),
    }),
});

export const { useGetRecipesQuery } = api;