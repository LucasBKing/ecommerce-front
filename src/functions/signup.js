import axios from 'axios';

export const signUpAccount = account => {
    return axios
        .post('http://localhost:4200/users/create', {
            account: account
        })
        .then(res => {
            return res.data;
        })
}
