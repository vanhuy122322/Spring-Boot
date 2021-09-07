import axios from 'axios';

const MENU_API_BASE_URL="http://localhost:8080/api/v1/menu";

class MenuService {

    getMenu(){
        return axios.get(MENU_API_BASE_URL)
    }
}
export default new MenuService()