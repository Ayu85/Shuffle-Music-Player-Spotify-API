import { useSelector } from 'react-redux'
import { FaCirclePlay } from "react-icons/fa6";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { TfiControlShuffle } from "react-icons/tfi";
import { RiRepeat2Line } from "react-icons/ri";

const CurrentTrack = () => {
    const track = useSelector(store => store.current_track.value)
    return (
        <div className='bg-[#000000] flex justify-evenly text-white  sticky h-24  items-center pl-3 bottom-0 backdrop-blur-lg'>
            <div className='flex gap-3'>
                <div>
                    <img src={track?.item?.album?.images[0]?.url} alt="" className='w-20' />
                </div>
                <div>
                    <h1 className='font-semibold'>{track?.item?.name}</h1>
                    <h1 className='text-sm text-slate-400'>{track?.item?.album?.artists[0].name},{track?.item?.album?.artists[1]?.name}</h1>
                    <h1></h1>
                </div>
            </div>
            <div className='flex text-4xl gap-4 items-center'>
                <TfiControlShuffle className='text-xl text-slate-500'/>
                <IoPlaySkipBack className='text-2xl'/>
                <FaCirclePlay />
                <IoPlaySkipForward className='text-2xl' />
                <RiRepeat2Line className='text-xl text-slate-500'/>

            </div>
        </div>
    )
}

export default CurrentTrack
