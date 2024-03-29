import { VscDebugContinue } from "react-icons/vsc";
import { FaGooglePlay } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const Buttons = () => {
    const navigate = useNavigate()

    return (
        <div className=" flex justify-center items-center gap-10 py-10 bg-top-left h-96 bg-[url('https://preview.wolfthemes.live/app/uploads/sites/31/2019/11/neonbrand-MENIBa0eZeA-unsplash.jpg')]">
            <div className="flex justify-center items-center gap-10 bg-[#00000083] backdrop-blur-sm w-full  h-96">
                <button onClick={() => {
                    navigate('/player')
                }}
                    className='bg-yellow-400 flex items-center gap-2 px-7 py-5 text-black hover:scale-110
              transition-all cursor-pointer font-bold text-lg rounded-full '>
                    Continue With Web<VscDebugContinue />
                </button>
                <button className='bg-white flex items-center gap-2 px-7 py-5 text-black hover:scale-110
              transition-all cursor-pointer font-bold text-lg rounded-full '>Download App<FaGooglePlay />
                </button>
            </div>
        </div>
    )
}
export default Buttons
