import axios from 'axios'
import { BASE_URL } from '@/config/config'

export default {
    allOrder() {
        const resp = axios.get(`${BASE_URL}orders`)
        console.log("SRv:: ", resp )
        return resp;
    }
}