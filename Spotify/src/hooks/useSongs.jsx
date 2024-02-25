import axios from "axios"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const useSongs = () => {
    const token = useSelector(store => store.access_token.value)
    useEffect(() => {
        const getSongs = async () => {
            const song = await axios.get('https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUfTFmNBRM/tracks', {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json"
                }
            })
            console.log(song);
        }
        getSongs()
    }, [])
}

export default useSongs
