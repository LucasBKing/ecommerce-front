import axios from 'axios';

export const loginAccount = account => {
    return axios
        .get('http://localhost:4200/users/signin', {
            params: {
                account: account
            }
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data);
            return res.data;
        })
}
