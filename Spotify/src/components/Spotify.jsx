import usePlaylist from "../hooks/usePlaylist"
import usePopularAlbums from "../hooks/usePopularAlbums"
import Buttons from "./Buttons"
import Hero from "./Hero"

const Spotify = () => {
    usePlaylist()
    usePopularAlbums()
    return (
        <>
            <Hero />
            <Buttons />
        </>
    )
}

export default Spotify
