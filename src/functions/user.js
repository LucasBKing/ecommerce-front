import axios from 'axios';

export const getUserById = id => {
    return axios
        .get(process.env.REACT_APP_API_URL+'users/account/'+id)
        .then(res => {
            return res.data;
        })
}

export const updateAccount = (account, id) => {
    return axios
        .post(process.env.REACT_APP_API_URL+'users/account', {
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
        .get(process.env.REACT_APP_API_URL+'users/providers')
        .then(res => {
            return res.data;
        })
}