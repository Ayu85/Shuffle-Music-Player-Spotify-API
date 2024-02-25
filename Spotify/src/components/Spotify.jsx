import usePlaylist from "../hooks/usePlaylist"
import usePopularAlbums from "../hooks/usePopularAlbums"
import useSongs from "../hooks/useSongs"
import Buttons from "./Buttons"
import Hero from "./Hero"

const Spotify = () => {
    usePlaylist()
    usePopularAlbums()
    useSongs()
    return (
        <>
            <Hero />
            <Buttons />
        </>
    )
}

export default Spotify
