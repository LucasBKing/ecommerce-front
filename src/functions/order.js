import axios from 'axios';


export const addOrder = data => {
    return axios
        .post('http://localhost:4200/order/add_order', {
            data:  data
        })
        .then(res => {
            return res.data;
        })
}

export const getOrders = () => {
    return axios
        .get('http://localhost:4200/order')
        .then(res => {
            return res.data;
        })
}