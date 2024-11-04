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
            query: () => '/?_sort=id&_order=desc',
            providesTags: () => [{
                type: 'Recipe'
            }]
        }),
    }),
});

export const { useGetRecipesQuery } = api;