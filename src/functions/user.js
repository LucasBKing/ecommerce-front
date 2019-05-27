import axios from 'axios';

export const getUserById = id => {
    return axios
        .get('http://localhost:4200/users/account/'+id)
        .then(res => {
            return res.data;
        })
}

export const updateAccount = (account, id) => {
    return axios
        .post('http://localhost:4200/users/account', {
            account: account,
            id: id
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data);
            return res.data;
        })
}

export const getProviders = () => {
    return axios
        .get('http://localhost:4200/users/providers')
        .then(res => {
            return res.data;
        })
}