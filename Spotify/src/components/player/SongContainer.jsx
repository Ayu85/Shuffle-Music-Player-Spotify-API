import { useSelector } from "react-redux"

const SongContainer = () => {
    const songs = useSelector(store => store.songs.value)
    return (
        < div >

        </div >
    )
}


export default SongContainer
