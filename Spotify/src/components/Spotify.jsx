import usePlaylist from "../hooks/usePlaylist"
import Buttons from "./Buttons"
import Hero from "./Hero"

const Spotify = () => {
    usePlaylist()

    return (
        <>
            <Hero />
            <Buttons />
        </>
    )
}

export default Spotify
