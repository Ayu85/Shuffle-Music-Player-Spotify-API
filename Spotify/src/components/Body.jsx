import { useSelector } from 'react-redux';
import Login from './Login'

import Spotify from './Spotify';

const Body = () => {
  const token = useSelector(store => store.access_token.value)

  return token ? <Spotify /> : <Login />
}

export default Body
