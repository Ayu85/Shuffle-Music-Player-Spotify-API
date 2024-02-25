import { configureStore } from '@reduxjs/toolkit'
import token from './slices/token';
import playlists from './slices/playlists';
import popular_albums from './slices/popular_albums';
import songs from './slices/songs';
import currentPlaylist from './slices/currentPlaylist';
const store = configureStore({
    reducer: {
        access_token: token,
        playlist: playlists,
        albums: popular_albums,
        songs: songs,
        current_playlist: currentPlaylist
    }
})
export default store;