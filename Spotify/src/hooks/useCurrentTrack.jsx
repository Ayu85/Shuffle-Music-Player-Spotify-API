import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addTrack } from "../redux/slices/currentTrack"
const useCurrentTrack = () => {
    const token = useSelector(store => store.access_token.value)
    const dispatch = useDispatch()
    useEffect(() => {
        const getTrack = async () => {
            const track = await axios.get('https://api.spotify.com/v1/me/player/currently-playing',
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json"
                    }
                })
            dispatch(addTrack(track.data))
            console.log(track);
        }
        getTrack()
    }, [])
}

export default useCurrentTrack
