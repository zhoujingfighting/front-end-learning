/**
 * @service:axios for geeting data from backend
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const showStatus = (status: number) => {
    let message = ''
    switch (status) {
        case 400:
            message = 'Request Error(400)'
            break
        case 401:
            message = 'Unauthorized Re-login Please(401)'
            break
        case 403:
            message = 'Access Denied(403)'
            break
        case 404:
            message = 'Request Error(404)'
            break
        case 408:
            message = 'Request Timeout(408)'
            break
        case 500:
            message = 'Server Error(500)'
            break
        case 501:
            message = 'Service Not Implemented(501)'
            break
        case 502:
            message = 'Network Error(502)'
            break
        case 503:
            message = 'Service Is Not Available(503)'
            break
        case 504:
            message = 'Network Timeout(504)'
            break
        case 505:
            message = 'HTTP Version Is Not Supported(505)'
            break
        default:
            message = `Connection Error(${status})!`
    }
    return `${message}，Please Check the Network or Contact the Administrator！`
}

const service = axios.create({
    // baseURL: "'http://127.0.0.1:3000",
    headers: {
        get: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        post: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    },
    withCredentials: true,
    timeout: 30000,
    transformRequest: [(data) => {
        data = JSON.stringify(data)
        return data
    }],
    validateStatus() {
        return true
    },
    transformResponse: [(data) => {
        if (typeof data === 'string' && data.startsWith('{')) {
            data = JSON.parse(data)
        }
        return data
    }]

})
/**
 * axios request interceptors
 */
service.interceptors.request.use((config: AxiosRequestConfig) => {
    let token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `${token}`;
    }
    return config
}, (error) => {
    error.data = {}
    error.data.msg = 'Please Check the Network or Contact the Administrator'
    return Promise.resolve(error)
})

/**
 * axios response interceptors
 */
service.interceptors.response.use((response: AxiosResponse) => {
    const status = response.status
    let msg = ''
    if (status < 200 || status >= 300) {
        msg = showStatus(status)
        if (typeof response.data === 'string') {
            response.data = { msg }
        } else {
            response.data.msg = msg
        }
    }
    return response
}, (error) => {
    if (axios.isCancel(error)) {
        console.log('repeated request: ' + error.message)
    } else {
        error.data = {}
        error.data.msg = 'Please Check the Network or Contact the Administrator！'
        console.error(error.data.msg)
    }
    return Promise.reject(error)
})

export default service