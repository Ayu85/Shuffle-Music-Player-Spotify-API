import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios'
import { addPlaylist } from "../redux/slices/playlists"
import { addAlbums } from "../redux/slices/popular_albums"
const usePopularAlbums = () => {
    const dispatch = useDispatch()
    const token = useSelector(store => store.access_token.value)
    useEffect(() => {
        const getAlbums = async () => {
            const albums = await axios.get('https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc', {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json"
                }
            });
            dispatch(addAlbums(albums.data.albums))
            //  console.log(albums);
        }
        getAlbums()
    }, [])

}

export default usePopularAlbums
