import $http from 'axios';
import { API_URL } from '../config';

export default () => {
    $http.interceptors.request.use((config) => {
        config.url = `${API_URL}/${config.url}`;
        config.headers = { 'Content-Type': 'application/json' };
        return config;
    });
};
