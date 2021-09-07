import axios from 'axios';

const BRAND_API_BASE_URL="http://localhost:8080/api/v1/brand";
class BrandService{

    getBrand(){
        return axios.get(BRAND_API_BASE_URL);
    }

    getPolicy(){
        return axios.get("http://localhost:8080/api/v1/policy");
    }
    getPolicyById(id_policy){
        return axios.get("http://localhost:8080/api/v1/detailpolicy"+"/"+ id_policy);
    }

}
export default new BrandService()