import axios from 'axios';

export const signUpAccount = account => {
    return axios
        .post(process.env.REACT_APP_API_URL+'/users/create', {
            account: account
        })
        .then(res => {
            return res.data;
        })
}
