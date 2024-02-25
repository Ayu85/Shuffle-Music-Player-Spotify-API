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

const Card = ({ track }) => {
    return <div className="flex justify-between px-10 ">
        <div className="text-white flex gap-3">
            <img src={track?.album?.images[2].url} className="w-14" alt="logo" />
            <div className="flex flex-col">
                <h1 className="font-semibold" >{track?.name}</h1>
                <h1 className="text-slate-300">{track?.artists[1]?.name}</h1>
            </div>
        </div>
        <h1 className="text-slate-300">{((track?.duration_ms / 1000) / 60).toFixed(2)}</h1>
    </div>
}
export default SongContainer
