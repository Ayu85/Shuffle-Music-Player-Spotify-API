import { configureStore } from '@reduxjs/toolkit'
import token from './slices/token';
const store = configureStore({
    reducer: {
        access_token: token
    }
})
export default store;