import { useSelector } from 'react-redux'
const CurrentTrack = () => {
    const track = useSelector(store => store.current_track.value)
    return (
        <div className='bg-[#000000da] text-white sticky h-20 bottom-0 backdrop-blur-lg'>
            <div>
                {track?.item?.name}
            </div>
            <div></div>
        </div>
    )
}

export default CurrentTrack
