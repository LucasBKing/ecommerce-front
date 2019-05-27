import axios from 'axios';

export const getToAccept = () => {
    return axios
        .get(process.env.REACT_APP_API_URL+'products')
        .then(res => {
            return res.data;
        })
}