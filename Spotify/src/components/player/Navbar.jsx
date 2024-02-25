import { BsFillSearchHeartFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className="flex justify-between  h-20 items-center ">
            <div className="relative pl-2">
                <input type="text0" placeholder="Search Songs,Artists,Playlists"
                    className="pl-3 outline-none  w-96 py-3 rounded-full " />
                <BsFillSearchHeartFill className="absolute text-zinc-700 cursor-pointer text-2xl top-3 right-2" />
            </div>
            <div className="bg-black text-white">
                Aayush
            </div>
        </div>
    )
}

export default Navbar
