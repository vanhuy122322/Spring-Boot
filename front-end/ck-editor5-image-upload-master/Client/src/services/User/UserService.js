import axios from 'axios';

const BLOG_API_BASE_URL="http://localhost:8080/api/v1/blog";
class UserService{
    getUserById(user_id) {
        return axios.get("http://localhost:8080/api/v1/change-user"+"/"+ user_id);;
      }
      getUpdateUser(users,user_id) {
        return axios.put("http://localhost:8080/api/v1/update-user"+"/"+ user_id,users);;
      }
}
export default new UserService()