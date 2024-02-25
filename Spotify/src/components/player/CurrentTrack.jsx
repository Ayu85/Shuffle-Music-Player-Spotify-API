import { useDispatch, useSelector } from 'react-redux'
import { FaCirclePlay } from "react-icons/fa6";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { TfiControlShuffle } from "react-icons/tfi";
import { RiRepeat2Line } from "react-icons/ri";
import axios from 'axios'
// import useCurrentTrack from '../../hooks/useCurrentTrack';
import { addTrack } from '../../redux/slices/currentTrack';
const CurrentTrack = () => {
    const track = useSelector(store => store.current_track.value)
    const token = useSelector(store => store.access_token.value)
    const dispatch = useDispatch()
    const nextSong = async () => {
        await axios.post('https://api.spotify.com/v1/me/player/next', {},{
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            }
        });
        const track = await axios.get('https://api.spotify.com/v1/me/player/currently-playing',
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json"
                }
            })
        dispatch(addTrack(track.data))
    }
    return (
        <div className='bg-[#000000] flex justify-between px-20 text-white  sticky h-20  items-center bottom-0 backdrop-blur-lg'>
            <div className='flex gap-3'>
                <div>
                    <img src={track?.item?.album?.images[0]?.url} alt="" className='w-16' />
                </div>
                <div>
                    <h1 className='font-semibold'>{track?.item?.name}</h1>
                    <h1 className='text-sm text-slate-400'>{track?.item?.album?.artists[0].name},{track?.item?.album?.artists[1]?.name}</h1>
                    <h1></h1>
                </div>
            </div>
            <div className='flex text-4xl gap-4 items-center'>
                <TfiControlShuffle className='text-xl text-slate-500 cursor-pointer' />
                <IoPlaySkipBack className='text-2xl cursor-pointer' />
                <FaCirclePlay />
                <IoPlaySkipForward className='text-2xl cursor-pointer' onClick={nextSong} />
                <RiRepeat2Line className='text-xl text-slate-500 cursor-pointer' />

            </div>
        </div>
    )
}

export default CurrentTrack
