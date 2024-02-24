import { AiFillHome } from "react-icons/ai";
import { LuSearch } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className="w-80 bg-black text-white">
            <div>
                <ul className="flex flex-col gap-3">
                    <li className="flex items-center gap-3 text-xl font-semibold tracking-wide "><AiFillHome className="text-3xl" />Home</li>
                    <li className="flex items-center gap-3 text-xl font-semibold tracking-wide "><LuSearch className="text-3xl" />Search</li>
                    <li className="flex items-center gap-3 text-xl font-semibold tracking-wide "><MdLibraryBooks className="text-3xl" />Library</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
