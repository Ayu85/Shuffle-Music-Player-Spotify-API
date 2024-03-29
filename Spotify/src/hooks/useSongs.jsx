import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addSongs } from "../redux/slices/songs"

const useSongs = () => {
    const dispatch = useDispatch()
    const token = useSelector(store => store.access_token.value)
    const URL = useSelector(store => store.URL.value)
    useEffect(() => {
        const getSongs = async () => {
            const song = await axios.get(URL, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json"
                }
            })
            dispatch(addSongs(song?.data?.items))
            // console.log(song);
        }
        getSongs()
    }, [URL])
}

export default useSongs
