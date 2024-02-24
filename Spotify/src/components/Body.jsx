import Login from './Login'
import { addToken } from '../redux/slices/token';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spotify from './Spotify';

const Body = () => {
  const dispatch = useDispatch()
  const token = useSelector(store => store.access_token.value)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch(addToken(token))
      console.log(token);
    }
  }, [])
  return token ? <Spotify /> : <Login />
}

export default Body
