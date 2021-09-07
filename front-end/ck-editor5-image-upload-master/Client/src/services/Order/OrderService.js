import axios from 'axios';

const ORDER_API_BASE_URL="http://localhost:8080/api/v1/infos";
const DELETEORDER_API_BASE_URL="http://localhost:8080/deleteorder";

class OrderService{
    CreateInfos(info){
        return axios.post(ORDER_API_BASE_URL,info);
    }
    getListOrder(user_id){
        return axios.get("http://localhost:8080/api/v1/listorder"+"/"+user_id);
    }

    getListOrders(){
        return axios.get("http://localhost:8080/api/v1/all-order");
    }

    getOrderDetail(order_id){
        return axios.get("http://localhost:8080/api/v1/order"+"/"+order_id);
    }
    getListOrderDetail(id_order){
        return axios.get("http://localhost:8080/order-detail"+"/"+id_order);
    }
    deleteOrder(id_order){
        return axios.delete("http://localhost:8080/api/v1/deleteorder" +"/"+ id_order);
    }
}
export default new OrderService()