import axios from 'axios';

const BLOG_API_BASE_URL="http://localhost:8080/api/v1/blog";
class BlogService{

    getBlog(){
        return axios.get(BLOG_API_BASE_URL);
    }
    getAllBlog(){
        return axios.get("http://localhost:8080/api/v1/allblog");
    }
    getYearBlog(){
        return axios.get("http://localhost:8080/api/v1/allyear");
    }
    getSell(){
        return axios.get("http://localhost:8080/api/v1/allsell");
    }
    getBlogbtId(id_blog){
        return axios.get("http://localhost:8080/api/v1/blod-detail" +"/"+id_blog);
    }
}
export default new BlogService()