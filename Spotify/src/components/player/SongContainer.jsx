import { useSelector } from "react-redux"

const SongContainer = () => {
    const songs = useSelector(store => store.songs.value)
    return (
        < div className="" >
            <h1>Songs</h1>
            {songs.map((song, key) => {
                return <div key={key}>{song.track.name}</div>
            })}
        </div >
    )
}


export default SongContainer
