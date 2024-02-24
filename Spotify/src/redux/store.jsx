import { configureStore } from '@reduxjs/toolkit'
import token from './slices/token';
import playlists from './slices/playlists';
const store = configureStore({
    reducer: {
        access_token: token,
        playlist: playlists
    }
})
export default store;