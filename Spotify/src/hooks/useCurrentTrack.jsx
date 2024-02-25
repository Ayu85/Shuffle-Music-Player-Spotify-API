import { useEffect } from "react"
import { useSelector } from 'react-redux'
import axios from 'axios'
const useCurrentTrack = () => {
    const token = useSelector(store => store.access_token.value)
    useEffect(() => {
        const getTrack = async () => {
            const track = await axios.get('https://api.spotify.com/v1/me/player/currently-playing',
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json"
                    }
                })
            console.log(track);
        }
        getTrack()
    }, [])
}

export default useCurrentTrack
