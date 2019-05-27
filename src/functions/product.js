import axios from 'axios';

export const getItemById= id => {
    return axios
        .get(process.env.REACT_APP_API_URL+'products/'+id)
        .then(res => {
            return res.data;
        })
}
