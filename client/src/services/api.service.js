import urljoin from 'url-join'
// import request from '../../utils/request'
import { http } from './http.service';
import { privateDomainApi } from '../configs/app';;
http.default.baseURL = privateDomainApi;

export function getProducts(params) {
    let query = '';
    for(let i in params) {
        query = query == '' ?  `${i}=${params[i]}`: `${query}&${i}=${params[i]}`
    }
    const apiUrl = query.length > 0 ? `products/list?${query}`: 'products/list';
    return http.request('get', apiUrl);
}

export function getProduct(id) {
    const apiUrl = `products/${id}`;
    return http.request('get', apiUrl);
}

export function createProduct(payload) {
    const apiUrl = 'products';
    return http.request('post', apiUrl, payload);
}

export function updateProduct(payload, id) {
    const apiUrl = urljoin('products', id);
    return http.request('put', apiUrl, payload);
}
