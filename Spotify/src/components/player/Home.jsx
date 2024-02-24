import Player from "./Player"
import Sidebar from "./Sidebar"

const Home = () => {
    return (
        <div className=" flex overflow-visible">
            <Sidebar/>
            <Player/>
        </div>
    )
}

export default Home
