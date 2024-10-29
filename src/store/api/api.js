import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const API_URL = "http://localhost:3000/recipes"

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        
    })
})
  

