import axios from 'axios';

export const addItem = item => {
    return axios
        .post(process.env.REACT_APP_API_URL+'providers/add', {
            item:  item
        })
        .then(res => {
            return res.data;
        })
}

export const getItems = () => {
    return axios
        .get(process.env.REACT_APP_API_URL+'providers/')
        .then(res => {
            return res.data;
        })
}

export const getItemByProviderId = id => {
    return axios
        .get(process.env.REACT_APP_API_URL+'providers/get_product_by_provider_id/'+id)
        .then(res => {
            return res.data;
        })
}

export const getItemByProviderName = name => {
    return axios
        .get(process.env.REACT_APP_API_URL+'providers/'+name)
        .then(res => {
            return res.data;
        })
}