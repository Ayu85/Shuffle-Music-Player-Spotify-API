import { createSlice } from "@reduxjs/toolkit"

const currentURL = createSlice({
    name: "url",
    initialState: {
        value: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUfTFmNBRM/tracks'
    },
    reducers: {
        addURL: (state, action) => {
            state.value = action.payload;
        }
    }
})
export default currentURL.reducer
export const { addURL } = currentURL.actions
