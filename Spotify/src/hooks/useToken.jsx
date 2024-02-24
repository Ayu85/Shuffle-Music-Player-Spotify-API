import { addToken } from '../redux/slices/token';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
const useToken = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const token = hash.substring(1).split("&")[0].split("=")[1];
            dispatch(addToken(token))
        }
    }, [])
}

export default useToken
