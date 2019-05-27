import axios from 'axios';

export const addItem = item => {
    return axios
        .post('http://localhost:4200/providers/add', {
            item:  item
        })
        .then(res => {
            return res.data;
        })
}

export const getItems = () => {
    return axios
        .get('http://localhost:4200/providers/')
        .then(res => {
            return res.data;
        })
}

export const getItemByProviderId = id => {
    return axios
        .get('http://localhost:4200/providers/get_product_by_provider_id/'+id)
        .then(res => {
            return res.data;
        })
}

export const getItemByProviderName = name => {
    return axios
        .get('http://localhost:4200/providers/'+name)
        .then(res => {
            return res.data;
        })
}