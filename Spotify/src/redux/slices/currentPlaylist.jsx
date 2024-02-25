import { createSlice } from '@reduxjs/toolkit'
const current_playlist = createSlice({
    name: "current_playlist",
    initialState: {
        value: null
    },
    reducers: {
        addCurrentPlaylist: (state, action) => {
            state.value = action.payload
        }
    }
})
export const { addCurrentPlaylist } = current_playlist.actions;
export default current_playlist.reducer