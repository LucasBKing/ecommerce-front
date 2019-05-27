import axios from 'axios';

export const getShoppingCartProducts = id => {
    return axios
        .get(process.env.REACT_APP_API_URL+'/cart/get_shopping_cart/'+id)
        .then(res => {
            return res.data;
        })
}

export const addToShoppingCart = (data, id) => {
    return axios
        .post(process.env.REACT_APP_API_URL+'/cart/add_to_cart/', {
            data: data,
            id: id
        })
        .then(res => {
            return res.data;
        })
}

export const cleanShoppingCart = id => {
    return axios
        .post(process.env.REACT_APP_API_URL+'/cart/remove_items/', {
            id: id
        })
        .then(res => {
            return res.data;
        })
}

export const removeItemShoppingCart = (idUser, idItem) => {
    return axios
        .post(process.env.REACT_APP_API_URL+'/cart/remove_item/', {
            idUser: idUser,
            idItem: idItem
        })
        .then(res => {
            return res.data;
        })
}