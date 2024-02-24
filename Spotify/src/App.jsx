import Body from "./components/Body"
import store from './redux/store';
import { Provider } from 'react-redux';
import LocomotiveScroll from 'locomotive-scroll';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/player/Home'
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const approute = createBrowserRouter([
    {
      path: '/',
      element: <Body />
    },
    {
      path: '/player',
      element: <Home />
    }
  ])
  return (
    <Provider store={store} >
      <RouterProvider router={approute}>
        <Outlet />
      </RouterProvider>
    </Provider>
  )
}

export default App
