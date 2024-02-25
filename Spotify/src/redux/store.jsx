import { configureStore } from '@reduxjs/toolkit'
import token from './slices/token';
import playlists from './slices/playlists';
import popular_albums from './slices/popular_albums';
const store = configureStore({
    reducer: {
        access_token: token,
        playlist: playlists,
        albums: popular_albums
    }
})
export default store;