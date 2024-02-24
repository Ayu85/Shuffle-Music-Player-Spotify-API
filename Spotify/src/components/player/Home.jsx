import Player from "./Player"
import Sidebar from "./Sidebar"

const Home = () => {
    return (
        <div className="h-[100vh] flex">
            <Sidebar/>
            <Player/>
        </div>
    )
}

export default Home
