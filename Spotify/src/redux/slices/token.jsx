import { createSlice } from "@reduxjs/toolkit";

const token = createSlice({
    name: "access_token",
    initialState: {
        value: null
    },
    reducers: {
        addToken: (state, action) => {
            state.value = action.payload
        }
    }
})
export const { addToken } = token.actions
export default token.reducer