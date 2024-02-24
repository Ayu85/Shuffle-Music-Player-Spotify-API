import { AiFillHome } from "react-icons/ai";
import { LuSearch } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import { SiMusicbrainz } from "react-icons/si";

const Sidebar = () => {
    return (
        <div className="w-80 h-full flex flex-col gap-5 bg-black text-white">
            <div className="flex items-center text-4xl font-[lateral] tracking-wider capitalize gap-3 pl-3 pt-3"><SiMusicbrainz className="text-7xl"/><h1>Shuffle</h1></div>
            <div className="border-b border-b-slate-400 pb-4">
                <ul className="flex flex-col gap-3 pl-3 pt-3">
                    <li className="flex items-center gap-3 text-lg font-semibold tracking-wide "><AiFillHome className="text-2xl" />Home</li>
                    <li className="flex items-center gap-3 text-lg font-semibold tracking-wide "><LuSearch className="text-2xl" />Search</li>
                    <li className="flex items-center gap-3 text-lg font-semibold tracking-wide "><MdLibraryBooks className="text-2xl" />Library</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
