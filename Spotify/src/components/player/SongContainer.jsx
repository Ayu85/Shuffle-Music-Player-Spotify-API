/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"

const SongContainer = () => {
    const songs = useSelector(store => store.songs.value)
    return (
        <div>
            <h1>Songs</h1>
            <div className="flex flex-col gap-3" >
                {songs.map((song, key) => {
                    return <Card {...song} key={key} />
                })}
            </div >
        </div>
    )
}

const Card = ({ track}) => {
    return <div className="flex">
        <img src={track?.album?.images[2].url} className="w-14" alt="logo" />
        <h1 className="text-white">{track?.name}</h1>
        <h1></h1>
    </div>
}
export default SongContainer
