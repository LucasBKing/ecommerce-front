import axios from 'axios';

export const getItemById= id => {
    return axios
        .get('http://localhost:4200/products/'+id)
        .then(res => {
            return res.data;
        })
}
