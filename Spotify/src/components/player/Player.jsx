import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addPlaylist } from "../../redux/slices/playlists"
const Player = () => {
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
            console.log(data);
            dispatch(addPlaylist(data?.data))
        }
         fetchPlaylists()
    }, [])
    return (
        <div className="w-full bg-center overflow-y-scroll h-[100vh]  bg-[url('https://preview.wolfthemes.live/app/uploads/sites/31/2019/11/joseph-young-IOzGybDmKR8-unsplash.jpg')]">
            <div className="w-full h-full backdrop-blur-sm bg-[#00000083]">
                player
            </div>
        </div>
    )
}

export default Player
