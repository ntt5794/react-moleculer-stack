// import axios from 'axios';
import HttpErrorHandler from './http.error.handler';
import Storage, { storage } from '../services/storage.service';

const requestInterceptor = {
    handle: config => {
        /*
        // Pre-request processing code Get access token
        const token = storage.getItem('accessToken');
        // Add Authorization token before sending request
        const newConfig = {
            ...config
        };
        newConfig.headers['Authorization'] = `Bearer ${token}`;
        */


        // Append Session Id to headers
        const newConfig = {
            ...config
        }
        newConfig.headers['session-id'] = `${storage.getItem('session-id')}`;
        return newConfig;
    },
    error: error => {
        // Pre-request error handling codes here
        return Promise.reject(error);
    }
};

const responseInterceptor = {
    handle: response => {
        // Response edit code here, 2xx status code response only

        // Store Session Id to storage (local/session)
        // Session Id is used to log user actions without login
        if(response.headers['session-id']) {
            storage.setItem('session-id', response.headers['session-id']);
        }
        return response;
    },
    error: err => {
        // Response error (not in 2xx range status code) handling codes here return
        // Promise.reject(err);
        if (err)
            return Promise.resolve(HttpErrorHandler.onHttpError(err));
    }
}

const mockRequestInterceptor = {
    handle: config => {
        // config = {     ...config,     url: 'mockup' }
        config.baseURL = 'http://localhost:0';
        return config;
    },
    error: err => {
        return Promise.reject(err)
    }
};

const mockResponseInterceptor = {
    handle: res => {
        return res;
    },
    error: err => {
        if (err.message === 'Network Error') {
            switch (err.config.url.replace(err.config.baseURL, "")) {
                case '/login/token':
                    return Promise.resolve({
                        data: {
                            ok: true,
                            data: {
                                accessToken: '',
                                refreshToken: ''
                            }
                        }
                    });
                case '/user/profile':
                    return Promise.resolve({
                        data: {
                            ok: true,
                            data: {
                                username: 'userMockup',
                                displayName: 'Mockup Name',
                                uid: 12345
                            }
                        }
                    });
                default:
                    return Promise.resolve({
                        data: {
                            ok: false,
                            msg: 'Oops!'
                        }
                    });
            }
        }
    }
};

export default {
    requestInterceptor,
    responseInterceptor,
    mockRequestInterceptor,
    mockResponseInterceptor
}