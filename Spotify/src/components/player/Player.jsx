import useCurrentTrack from "../../hooks/useCurrentTrack"
import usePlaylist from "../../hooks/usePlaylist"
import usePopularAlbums from "../../hooks/usePopularAlbums"
import useSongs from "../../hooks/useSongs"
import CurrentTrack from "./CurrentTrack"
import Navbar from "./Navbar"
import PopularAlbums from "./PopularAlbums"
import SongContainer from "./SongContainer"

const Player = () => {
    usePlaylist()
    usePopularAlbums()
    useSongs()
    useCurrentTrack()
    return (
        <div className="w-full bg-center h-[100vh]  overflow-y-scroll bg-[url('https://preview.wolfthemes.live/app/uploads/sites/31/2019/11/joseph-young-IOzGybDmKR8-unsplash.jpg')]">
            <div className="w-full h-max backdrop-blur-sm bg-[#00000083]">
                <Navbar />
                <PopularAlbums />
                <SongContainer />
                <CurrentTrack/>
            </div>
        </div>
    )
}

export default Player
