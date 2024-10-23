import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./user.actions";


export const useSlice = createSlice({
    name:'users',
    initialState: [],
    reducers: {
        isLoading: false,
    },
    extraReducers: builder => {
        builder.addCase(getUserById.pending, state => {

        })
    }
})
