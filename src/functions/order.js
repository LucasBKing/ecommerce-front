import axios from 'axios';


export const addOrder = data => {
    return axios
        .post(process.env.REACT_APP_API_URL+'order/add_order', {
            data:  data
        })
        .then(res => {
            return res.data;
        })
}

export const getOrders = () => {
    return axios
        .get(process.env.REACT_APP_API_URL+'order')
        .then(res => {
            return res.data;
        })
}