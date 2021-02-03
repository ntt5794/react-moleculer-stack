import axios from 'axios';
import interceptors from '../utils/http.interceptors';
import HttpErrorHandler from '../utils/http.error.handler';
import { privateDomainApi } from '../configs/app';

class HttpService {
    _http = null;
    _configs = axios.defaults;
    _baseUrl = '';
    constructor(configs = { baseUrl: '' }) {
        this._http = axios.create({
            ...configs
        });
        this._baseUrl = configs.baseUrl;
        if (process.env.REACT_APP_MOCK === 'true') {
            this._http.interceptors.request.use(interceptors.mockRequestInterceptor.handle, interceptors.mockRequestInterceptor.error);
            this._http.interceptors.response.use(interceptors.mockResponseInterceptor.handle, interceptors.mockResponseInterceptor.error);
        } else {
            this._http.interceptors.request.use(interceptors.requestInterceptor.handle, interceptors.requestInterceptor.error);
            this._http.interceptors.response.use(interceptors.responseInterceptor.handle, interceptors.responseInterceptor.error);
        }

    }
    get default() {
        return new HttpService();
    }

    set baseUrl(baseUrl) {
        this._baseUrl = baseUrl;
    }

    request(method, url, data = {}, config = {}) {
        if(!url.includes('http://') && !url.includes('https://')) {
            url = `${this._baseUrl}${url}`
        }
        config = method === 'get' ? { ...config, params: data } : config;
        return this._http({ url, method, data, ...config })
            .then(response => response.data)
            .catch(error => HttpErrorHandler.checkError(error.response));
    }
}

export default HttpService;

export const http = new HttpService({ baseUrl: privateDomainApi });