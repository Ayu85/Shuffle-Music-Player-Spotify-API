import { useSelector } from 'react-redux'
const CurrentTrack = () => {
    const track = useSelector(store => store.current_track.value)
    return (
        <div className='bg-[#000000da] text-white  sticky h-20 bottom-0 backdrop-blur-lg'>
            <div>
                <h1 className='font-semibold'>{track?.item?.name}</h1>
                <h1 className='text-sm text-slate-400'>{track?.item?.album?.artists[0].name},{track?.item?.album?.artists[1]?.name}</h1>
                <h1></h1>
            </div>
            <div></div>
        </div>
    )
}

export default CurrentTrack
