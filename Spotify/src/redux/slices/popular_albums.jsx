import { createSlice } from '@reduxjs/toolkit'
const popular_albums = createSlice({
    name: "albums",
    initialState: {
        value: []
    },
    reducers: {
        addAlbums: (state, action) => {
            state.value = action.payload
        }
    }
})
export default popular_albums.reducer
export const { addAlbums } = popular_albums.actions
