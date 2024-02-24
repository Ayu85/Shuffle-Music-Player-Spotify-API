import { useSelector } from 'react-redux';
import Login from './Login'

import Spotify from './Spotify';
import useToken from '../hooks/useToken';

const Body = () => {
  const token = useSelector(store => store.access_token.value)
  useToken()
  return token ? <Spotify /> : <Login />
}

export default Body
