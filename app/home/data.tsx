"use client"

import { setDataUser } from '@/redux/reducers/userReducer';
import axios from 'axios'
import { useDispatch } from 'react-redux';

export const fetchData = () => {
    const dispatch = useDispatch();

    const user = async() => {
        const url = `/api/fetchUser`
    
        const response = await axios.get(url);
        dispatch(setDataUser(response.data))
        return response.data
    }

    return { user };
}
