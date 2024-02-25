import { useSelector } from "react-redux"

const SongContainer = () => {
    const songs = useSelector(store => store.songs.value)
    return (
        < div >
            {songs.map((s, key) => {
                return <div key={key}>{s.name}</div>
            })}
        </div >
    )
}


export default SongContainer
