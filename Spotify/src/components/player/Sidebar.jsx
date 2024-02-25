import { AiFillHome } from "react-icons/ai";
import { LuSearch } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import { SiMusicbrainz } from "react-icons/si";
import { RiPlayList2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const playlist = useSelector(store => store.playlist.value)
    console.log("pl", playlist);
    return (
        <div className=" w-80 h-[100vh] overflow-y-scroll  bg-top-left bg-[url('https://preview.wolfthemes.live/app/uploads/sites/31/2019/11/joseph-young-IOzGybDmKR8-unsplash.jpg')] ">
            <div className=" flex flex-col gap-5  text-white bg-[#00000083] backdrop-blur-md  ">
                <div className="flex items-center text-4xl font-[lateral] tracking-wider capitalize gap-3 pl-3 pt-3"><SiMusicbrainz className="text-7xl" /><h1>Shuffle</h1></div>
                <div className="border-b border-b-slate-400 pb-4">
                    <ul className="flex flex-col   pt-3">
                        <li className="flex hover:bg-slate-600 px-3 cursor-pointer transition-all duration-200 py-1 items-center gap-3 text-md font-semibold tracking-wide "><AiFillHome className="text-2xl" />Home</li>
                        <li className="flex hover:bg-slate-600 px-3 cursor-pointer transition-all duration-200 py-1 items-center gap-3 text-md font-semibold tracking-wide "><LuSearch className="text-2xl" />Search</li>
                        <li className="flex hover:bg-slate-600 px-3 cursor-pointer transition-all duration-200 py-1 items-center gap-3 text-md font-semibold tracking-wide "><MdLibraryBooks className="text-2xl" />Library</li>
                    </ul>
                </div>
                {/* playlists */}
                <div className="border-b border-b-slate-400 pb-4 ">
                    <h1 className="text-xl flex items-center gap-2 font-semibold tracking-wide pl-3"><RiPlayList2Fill />
                        {playlist?.message}</h1>
                    <ul className="flex flex-col text-white  pt-3">

                        {
                            playlist?.playlists?.items?.map((list, key) => {
                                return <li key={key} className="flex hover:bg-slate-600 px-3
                             cursor-pointer transition-all duration-200 py-1 items-center 
                             gap-3 text-md font-semibold tracking-wide "><img src={list?.images[0]?.url} className="w-10" alt="" />{list?.name}</li>
                            })
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
