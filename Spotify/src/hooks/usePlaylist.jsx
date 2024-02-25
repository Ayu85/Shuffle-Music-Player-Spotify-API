import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addPlaylist } from "../redux/slices/playlists"
import { addCurrentPlaylist } from "../redux/slices/currentPlaylist"
const usePlaylist = () => {
    const token = useSelector(store => store.access_token.value)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchPlaylists = async () => {
            const data = await axios.get('https://api.spotify.com/v1/browse/featured-playlists',
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json"
                    },
                }
            );
            //  console.log(data);
            dispatch(addPlaylist(data?.data))
            dispatch(addCurrentPlaylist(data?.data?.playlists?.items[0]))
        }
        fetchPlaylists()
    }, [])
}

export default usePlaylist
