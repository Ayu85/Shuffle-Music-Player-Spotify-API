import { useEffect } from "react"
import Body from "./components/Body"

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      console.log(token);
    }
  }, [])
  return (
    <div >
      <Body />
    </div>
  )
}

export default App
