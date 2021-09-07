import axios from 'axios';

const SLIDER_API_BASE_URL="http://localhost:8080/api/v1/slider";

class SliderService {

    getSlider(){
        return axios.get(SLIDER_API_BASE_URL)
    }
}
export default new SliderService()