import axios, {AxiosInstance} from "axios";

const axiosHttp = axios.create({
    baseURL: 'http://localhost:1305/',
    timeout: 1000
})

export default axiosHttp;