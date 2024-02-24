import { createSlice } from "@reduxjs/toolkit";

const playlists = createSlice({
    name: "platlist",
    initialState: {
        value: []
    },
    reducers: {
        addPlaylist: (state, action) => {
            state.value = action.payload
        }
    }
})
export const { addPlaylist } = playlists.actions
export default playlists.reducer