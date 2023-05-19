import axios, { InternalAxiosRequestConfig } from "axios";


const $host = axios.create({
    baseURL: import.meta.env.VITE_SERVER_ENDPOINT
})

const $authHost = axios.create({
    baseURL: import.meta.env.VITE_SERVER_ENDPOINT
})

const authInterceptor = (config: InternalAxiosRequestConfig) => {
    if (!config.headers) {
        throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
    }
    config.headers.authorization = `Bearer ${localStorage.getItem('jwtString')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}