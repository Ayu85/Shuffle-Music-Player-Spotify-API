import { createSlice } from "@reduxjs/toolkit";

const currentTrack = createSlice({
    name: "currentTrack",
    initialState: {
        value: null
    },
    reducers: {
        addTrack: (state, action) => {
            state.value = action.payload
        }
    }
})
export const { addTrack } = currentTrack.actions
export default currentTrack.reducer