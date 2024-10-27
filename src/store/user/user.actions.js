import { createAsyncThunk } from "@reduxjs/toolkit"

const fetchUserById = userId => new Promise(resolve => setTimeout(() => resolve({ id: 1, name: 'Max' }), 1000))

export const getUserById = createAsyncThunk('users/by-id', async(userId, thunkApi) => {

    try {
        const response = await fetchUserById(userId)
        return response
    } catch(error) {
        thunkApi.rejectWithValue({error})
    }
    
})