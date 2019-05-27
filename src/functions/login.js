import axios from 'axios';

export const loginAccount = account => {
    return axios
        .get(process.env.REACT_APP_API_URL+'users/signin', {
            params: {
                account: account
            }
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data);
            return res.data;
        })
}
