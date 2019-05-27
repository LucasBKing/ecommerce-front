import axios from 'axios';

export const getToAccept = () => {
    return axios
        .get('http://localhost:4200/products')
        .then(res => {
            return res.data;
        })
}