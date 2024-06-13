import axios, {AxiosInstance} from "axios";

// const axiosHttp = axios.create({
//     baseURL: 'http://localhost:1305/',
//     timeout: 1000
// })
class Http {
    instance: AxiosInstance
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:1305/',
            timeout: 10000
        })
    }
}

const axiosHttp = new Http().instance
export default axiosHttp;