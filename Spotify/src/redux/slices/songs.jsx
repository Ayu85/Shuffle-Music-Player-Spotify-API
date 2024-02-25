import { createSlice } from "@reduxjs/toolkit";

const songs = createSlice({
    name: "songs",
    initialState: {
        value: []
    },
    reducers: {
        addSongs: (state, action) => {
            state.value = action.payload
        }
    }
})
export const { addSongs } = songs.actions
export default songs.reducer