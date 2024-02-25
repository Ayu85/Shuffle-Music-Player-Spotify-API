import Navbar from "./Navbar"
import PopularAlbums from "./PopularAlbums"

const Player = () => {

    return (
        <div className="w-full bg-center  overflow-y-scroll bg-[url('https://preview.wolfthemes.live/app/uploads/sites/31/2019/11/joseph-young-IOzGybDmKR8-unsplash.jpg')]">
            <div className="w-full h-full backdrop-blur-sm bg-[#00000083]">
                <Navbar />
                <PopularAlbums/>
            </div>
        </div>
    )
}

export default Player
