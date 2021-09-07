import axios from 'axios';

const ADMIN_API_BASE_URL="http://localhost:8080/admin";
const ADMINALLPRODUCT_API_BASE_URL="http://localhost:8080/admin/all-product?page=";

const BRAND_API_BASE_URL="http://localhost:8080/admin/brand";
const DETAILBRAND_API_BASE_URL="http://localhost:8080/admin/detailbrand";
const ADDBRAND_API_BASE_URL="http://localhost:8080/admin/addBrand";

const CATEGORY_API_BASE_URL="http://localhost:8080/admin/category";
const MENU_API_BASE_URL="http://localhost:8080/admin/menu";
const DETAILCATEGORY_API_BASE_URL="http://localhost:8080/admin/detailcategory";
const ADDCATEGORY_API_BASE_URL="http://localhost:8080/admin/addCategory";


const USER_API_BASE_URL="http://localhost:8080/admin/user?page=";
class AdminService{
    
  /* Product */
    getAllProduct(page){
        return axios.get(ADMINALLPRODUCT_API_BASE_URL+page);
    }
    createProduct1(category_id,brand_id,product){
        return axios.post("http://localhost:8080/admin/product/add/"+category_id+"/"+brand_id,product);
    }

    findAllproduct(){
        return axios.get("http://localhost:8080/admin/product/allproduct");
    }

    createRelateProduct(relateproduct){
        return axios.post("http://localhost:8080/admin/addRelateProduct",relateproduct);
    }

    createRelateProduct1(relate_id,relateproduct){
        return axios.post("http://localhost:8080/admin/relateproduct/add/"+relate_id,relateproduct);
    }

    deleteProduct(id_product){
        return axios.delete(ADMIN_API_BASE_URL +"/"+ id_product);
    }
    getProductById(idproduct){
        return axios.get(ADMIN_API_BASE_URL+"/"+idproduct);
    }
    editProduct(product,idproduct){
        return axios.put(ADMIN_API_BASE_URL+"/"+"editproduct"+"/"+idproduct,product);
    }

              /*               brand    */


    getAllBrand(page){
        return axios.get(BRAND_API_BASE_URL+"?page="+page);
    }
    deleteBrand(id_brand){
        return axios.delete(BRAND_API_BASE_URL +"/"+ id_brand);
    }
    getBrandById(idbrand){
        return axios.get(DETAILBRAND_API_BASE_URL+"/"+idbrand);
    }
    creatBrand(brand){
        return axios.post(ADDBRAND_API_BASE_URL,brand);
    }
    updateBrand(brand){
        return axios.post(ADDBRAND_API_BASE_URL,brand);
    }
    editBrand(brand,idbrand){
        return axios.put(BRAND_API_BASE_URL+"/"+idbrand,brand);
    }
                  /*         category          */ 

    getAllCategory(page){
        return axios.get(CATEGORY_API_BASE_URL+"?page="+page);
    }
    deleteCategory(id_category){
        return axios.delete(CATEGORY_API_BASE_URL +"/"+ id_category);
    }
    getCategoryById(idcategory){
        return axios.get(DETAILCATEGORY_API_BASE_URL+"/"+idcategory);
    }
    creatCategory(category){
        return axios.post(ADDCATEGORY_API_BASE_URL,category);
    }
    updateCategory(category){
        return axios.post(ADDCATEGORY_API_BASE_URL,category);
    }
    editCategory(category,idcategory){
        return axios.put(CATEGORY_API_BASE_URL+"/"+idcategory,category);
    }

                /*         user          */ 
    getAllUser(page){
        return axios.get(USER_API_BASE_URL+page);
    }
    getUserbyId(id_user){
        return axios.get(ADMIN_API_BASE_URL+"/"+"user_detail"+"/"+id_user);
    }
   
      /*         menu        */ 
      getAllMenu(page){
        return axios.get(MENU_API_BASE_URL+"?page="+page);
    }
    creatMenu(menu){
        return axios.post(ADMIN_API_BASE_URL+"/"+"addMenu",menu);
    }

    deleteMenu(id_menu){
        return axios.delete(ADMIN_API_BASE_URL+"/"+"menu" +"/"+ id_menu);
    }

    getMenuById(id_menu){
        return axios.get(ADMIN_API_BASE_URL+"/"+"detailmenu" +"/"+id_menu);
    }
    
    editMenu(menu,idmenu){
        return axios.put(ADMIN_API_BASE_URL+"/"+"menu"+"/"+idmenu,menu);
    }

    //////////slider//////////
    getAllSlider(page){
        return axios.get(ADMIN_API_BASE_URL+"/"+"slider"+"?page="+page);
    }
    creatSlider(slider){
        return axios.post(ADMIN_API_BASE_URL+"/"+"addSlider",slider);
    }

    deleteSlider(id_slider){
        return axios.delete(ADMIN_API_BASE_URL+"/"+"slider" +"/"+ id_slider);
    }

    getSliderById(id_slider){
        return axios.get(ADMIN_API_BASE_URL+"/"+"detailslider" +"/"+id_slider);
    }
    
    editSlider(slider,idslider){
        return axios.put(ADMIN_API_BASE_URL+"/"+"slider"+"/"+idslider,slider);
    }
      ////////////////////////////blog//////////////////////

      getAllBlog(page){
        return axios.get(ADMIN_API_BASE_URL+"/"+"blog"+"?page="+page);
    }
    creatBlog(blog){
        return axios.post(ADMIN_API_BASE_URL+"/"+"addBlog",blog);
    }

    deleteBlog(id_blog){
        return axios.delete(ADMIN_API_BASE_URL+"/"+"blog" +"/"+ id_blog);
    }

    getBlogById(id_blog){
        return axios.get(ADMIN_API_BASE_URL+"/"+"detailblog" +"/"+id_blog);
    }
    
    editBlog(blog,idblog){
        return axios.put(ADMIN_API_BASE_URL+"/"+"blog"+"/"+idblog,blog);
    }

    ////////////////////////////policy//////////////////////

    getAllPolicy(page){
        return axios.get(ADMIN_API_BASE_URL+"/"+"policy"+"?page="+page);
    }
    creatPolicy(policy){
        return axios.post(ADMIN_API_BASE_URL+"/"+"addPolicy",policy);
    }

    deletePolicy(id_policy){
        return axios.delete(ADMIN_API_BASE_URL+"/"+"policy" +"/"+ id_policy);
    }

    getPolicyById(id_policy){
        return axios.get(ADMIN_API_BASE_URL+"/"+"detailpolicy" +"/"+id_policy);
    }
    
    editPolicy(policy,id_policy){
        return axios.put(ADMIN_API_BASE_URL+"/"+"policy"+"/"+id_policy,policy);
    }

      ////////////////////////////contact//////////////////////
      creatContact(contact){
        return axios.post("http://localhost:8080/api/v1/addContact",contact);
    }
    getContact(page){
        return axios.get("http://localhost:8080/api/v1/contact?page="+page);
    }
    getContactbyId(id_content){
        return axios.get("http://localhost:8080/api/v1/detailcontact"+"/"+id_content);
    }
}
export default new AdminService()