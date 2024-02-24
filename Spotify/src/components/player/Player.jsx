import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import axios from 'axios'
const Player = () => {
    const [playLists, setPlaylists] = useState(null)
    const token = useSelector(store => store.access_token.value)
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
            setPlaylists(data?.data)
        }
        fetchPlaylists()
    }, [])
    return (
        <div className="w-full bg-center h-full bg-[url('https://preview.wolfthemes.live/app/uploads/sites/31/2019/11/joseph-young-IOzGybDmKR8-unsplash.jpg')]">
            <div className="w-full h-full backdrop-blur-sm bg-[#00000083]">
                player
            </div>
        </div>
    )
}

export default Player
