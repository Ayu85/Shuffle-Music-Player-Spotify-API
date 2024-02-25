import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addSongs } from "../redux/slices/songs"

const useSongs = () => {
    const dispatch = useDispatch()
    const token = useSelector(store => store.access_token.value)
    useEffect(() => {
        const getSongs = async () => {
            const song = await axios.get('https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUfTFmNBRM/tracks', {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json"
                }
            })
            dispatch(addSongs(song?.data?.items))
            // console.log(song);
        }
        getSongs()
    }, [])
}

export default useSongs
