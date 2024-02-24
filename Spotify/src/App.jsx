import Body from "./components/Body"
import store from './redux/store';
import { Provider } from 'react-redux';
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <Provider store={store} >
      <Body />
    </Provider>
  )
}

export default App
