import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import * as ClassicEditor  from '@ckeditor/ckeditor5-build-classic'
//import  * as Essentials from '@ckeditor/ckeditor5-essentials';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import AdminService from '../../../../services/Admin/AdminService';
import ProductService from '../../../../services/Home/ProductService';
import AdminMenu from '../../AdminMenu'
import AdminUser from '../../AdminUser'
import CKEditor from '@ckeditor/ckeditor5-react'
export default class AdminRelateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
           id: this.props.match.params.id,
          products: [],
          product: [],
          product_id: 1,
          relate_id: '',
        };
        this.handleBrand = this.handleBrand.bind(this);
        this.onChangeProductId = this.onChangeProductId.bind(this);
        this.onChangeRelateId = this.onChangeRelateId.bind(this);
 
        }
    
        componentDidMount(){
          AdminService.findAllproduct().then((res) =>{
            this.setState({product:res.data})
            
            });
            AdminService.getProductById(this.state.id).then((res) =>{
              let products=res.data;
                this.setState({id:products.id,title:products.title});

          });
            
        }
        onChangeProductId(e) {
          this.setState({
            product_id: e.target.value
          });
        }
        onChangeRelateId(e) {
         
          this.setState({
            relate_id: e.target.value
          });
        }
      
    
        handleBrand(e) {
            e.preventDefault();
            let file=this.state.id
           let relateproduct={
            product_id:this.state.product_id,
            relate_id:this.state.relate_id};
           console.log('product=>' +JSON.stringify(relateproduct));
      
           AdminService.createRelateProduct1(this.state.id,relateproduct).then((res) => {
            this.props.history.push("/admin/product");
          });
      };
      
    render() {
        console.log('STATE _', this.state);
        return (
            <div>
                  <div id="wrapper">
        {/* Sidebar */}
       <AdminMenu/>
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <AdminUser/>

  <main>
  <div className="rows"   style={{ marginLeft: "10px" }}>
     
            <h4 className="card-title">THÊM SẢN PHẨM </h4>
          
            <div className="col-12 grid-margin">
  <div className="card">
    <div className="card-body">
     
      <form className="form-sample">
        <div className="row">
        
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Chọn sản phẩm liên quan</label>
              <div className="col-sm-9">
                <select className="form-control" name="product_id" id="product_id" value={this.state.product_id} onChange={this.onChangeProductId}>
                   {
         this.state.product.map(
          brands =>
                  <option  value={brands.id} >{brands.title}</option>
         )}
                </select>
              </div>
            </Form.Group>
          </div>
          </div>
<div className="form-check">
                
                </div>
                <button onClick={this.handleBrand}  className="btn btn-primary mr-2">Lưu</button>
                <a type="submit" href="/admin/brand" className="btn btn-primary mr-2">Quay lại</a>

      {/* <textarea type="text"  cols="30" rows="15" value={this.state.content}   onChange={this.handleStateChanges} className="form-control" name="content" placeholder=" Enter Phone" /> */}
  
      </form>
      </div>
  </div>
</div>
</div>

</main>
  </div>
  </div>
  </div>
               

            </div>
        )
    }
}
