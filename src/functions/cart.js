import axios from 'axios';

export const getShoppingCartProducts = id => {
    return axios
        .get('http://localhost:4200/cart/get_shopping_cart/'+id)
        .then(res => {
            return res.data;
        })
}

export const addToShoppingCart = (data, id) => {
    return axios
        .post('http://localhost:4200/cart/add_to_cart/', {
            data: data,
            id: id
        })
        .then(res => {
            return res.data;
        })
}

export const cleanShoppingCart = id => {
    return axios
        .post('http://localhost:4200/cart/remove_items/', {
            id: id
        })
        .then(res => {
            return res.data;
        })
}

export const removeItemShoppingCart = (idUser, idItem) => {
    return axios
        .post('http://localhost:4200/cart/remove_item/', {
            idUser: idUser,
            idItem: idItem
        })
        .then(res => {
            return res.data;
        })
}