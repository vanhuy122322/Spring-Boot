import axios from 'axios';

const NEWPRODUCT_API_BASE_URL="http://localhost:8080/api/v1/newproduct";
const SALEPRODUCT_API_BASE_URL="http://localhost:8080/api/v1/saleproduct";
const FASHIONPRODUCT_API_BASE_URL="http://localhost:8080/api/v1/fashionproduct";
const PRODUCTDETAIL_API_BASE_URL="http://localhost:8080/api/v1/product/product-detail";
const PRODUCT_API_BASE_URL="http://localhost:8080/api/v1/product?page=";
const PRODUCTCATEGORY_API_BASE_URL="http://localhost:8080/api/v1/product";
const BRANDPRODUCT_API_BASE_URL="http://localhost:8080/api/v1/product/brand";
const COPRODUCT_API_BASE_URL="http://localhost:8080/api/v1/coproduct";
const PINPRODUCT_API_BASE_URL="http://localhost:8080/api/v1/pinproduct";
const PRODUCTRELATE_API_BASE_URL="http://localhost:8080/api/v1/product/product";
class ProductService {

    getProduct(page){
        return axios.get(PRODUCT_API_BASE_URL +page)
    }

    getSellProduct(page){
        return axios.get("http://localhost:8080/api/v1/sale/productsale?page=" +page)
    }

    getNewProduct(){
        return axios.get(NEWPRODUCT_API_BASE_URL)
    }
    getSaleProduct(){
        return axios.get(SALEPRODUCT_API_BASE_URL)
    }
    getFashionProduct(){
        return axios.get(FASHIONPRODUCT_API_BASE_URL)
    }
    getCOProduct(){
        return axios.get(COPRODUCT_API_BASE_URL)
    }
    getPinProduct(){
        return axios.get(PINPRODUCT_API_BASE_URL)
    }
    getProductById(id){
        return axios.get(PRODUCTDETAIL_API_BASE_URL+"/"+ id);
    }
    getProductByCategoryId(category_id,page){
        return axios.get(PRODUCTCATEGORY_API_BASE_URL+"/"+ category_id+"?page="+page);
    }
    getProductRelate(relateid){
        return axios.get(PRODUCTRELATE_API_BASE_URL+"/"+ relateid);
    }
    getProductBrand(brandid,page){
        return axios.get(BRANDPRODUCT_API_BASE_URL+"/"+ brandid+"?page="+page);
    }

    findByTitle(title){
        return axios.get(`http://localhost:8080/api/v1/tutorials?title=${title}`);
    }


   getaccessories(){
        return axios.get("http://localhost:8080/api/v1/accessories");
    }
    getaccessoriesRelate(accessoriesid){
        return axios.get("http://localhost:8080/api/v1/accessories/accessories"+"/"+ accessoriesid);
    }
    getaccessoriesbyId(accessories_id){
        return axios.get("http://localhost:8080/api/v1/accessories/accessories-detail"+"/"+ accessories_id);
    }
    
}
export default new ProductService()