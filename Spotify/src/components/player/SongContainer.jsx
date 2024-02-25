/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"

const SongContainer = () => {
    const songs = useSelector(store => store.songs.value)
    const currentPlaylist = useSelector(store => store.current_playlist.value)
    return (
        <div>
            <div className="flex justify-between items-center px-10 mb-10 mt-10 bg-[#0000008a] py-10">
                <div>
                    <img src={currentPlaylist?.images[0]?.url} alt="" />
                </div>
                <div className="text-white font-[joy]">
                    <h1 className="text-4xl font-semibold tracking-wide">{currentPlaylist?.name}</h1>
                    <h1>{currentPlaylist?.description}</h1>
                </div>
            </div>
            <div className="flex flex-col " >
                {songs.map((song, key) => {
                    return <Card {...song} key={key} />
                })}
            </div >
        </div>
    )
}

const Card = ({ track }) => {
    return <div className="flex justify-between px-10 cursor-pointer
     py-2 border-b border-b-[#0000003f] hover:bg-[#0000003f] transition-all ">
        <div className="text-white flex gap-3">
            <img src={track?.album?.images[2].url} className="w-14" alt="logo" />
            <div className="flex flex-col w-96">
                <h1 className="font-semibold" >{track?.name}</h1>
                <h1 className="text-slate-300">{track?.artists[1]?.name}</h1>
            </div>
        </div>
        <h1 className="text-slate-300">{((track?.duration_ms / 1000) / 60).toFixed(2)}</h1>
        <h1 className="text-slate-300">{((track?.album?.release_date))}</h1>
    </div>
}
export default SongContainer
