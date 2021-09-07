import axios from 'axios';
const TRADE_API_BASE_URL="http://localhost:8080/api/v1/trade";

class TradeService {

    getTrade(){
        return axios.get(TRADE_API_BASE_URL)
    }
}
export default new TradeService()