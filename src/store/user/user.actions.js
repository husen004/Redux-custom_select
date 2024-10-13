import { createAsyncThunk } from "@reduxjs/toolkit"
import { useId } from "react"

const fetchUserById = userId => new Promise(resolve => setTimeout(() => resolve({ id: 1, name: 'Max' }), 1000))


export const getUserById = createAsyncThunk('users/by-id', async(userID, thunkApi) => {
    const response = await fetchUserById(userId)
    return response
})