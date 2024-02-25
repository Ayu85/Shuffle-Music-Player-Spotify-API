import useCurrentTrack from "../../hooks/useCurrentTrack"
import useSongs from "../../hooks/useSongs"
import Navbar from "./Navbar"
import PopularAlbums from "./PopularAlbums"
import SongContainer from "./SongContainer"

const Player = () => {
    useSongs()
    useCurrentTrack()
    return (
        <div className="w-full bg-center h-[100vh]  overflow-y-scroll bg-[url('https://preview.wolfthemes.live/app/uploads/sites/31/2019/11/joseph-young-IOzGybDmKR8-unsplash.jpg')]">
            <div className="w-full h-max backdrop-blur-sm bg-[#00000083]">
                <Navbar />
                <PopularAlbums />
                <SongContainer />
            </div>
        </div>
    )
}

export default Player
