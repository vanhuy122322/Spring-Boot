import React, { Component } from 'react'
import AdminMenu from '../../AdminMenu'
import AdminUser from '../../AdminUser'
import { confirmAlert } from 'react-confirm-alert'
import NumberFormat from "react-number-format";

import AdminService from '../../../../services/Admin/AdminService';
import { Form } from 'react-bootstrap';
import * as ClassicEditor  from '@ckeditor/ckeditor5-build-classic'
import CKEditor from '@ckeditor/ckeditor5-react'

export default class AdminEditCategory extends Component {
    constructor(props) {
        super(props);
        this.handlecategory = this.handlecategory.bind(this);
      
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.state = {
            id: this.props.match.params.id,
          
          name: "",
          description: "",
          image:""
        };
      }
      componentDidMount(){
          AdminService.getCategoryById(this.state.id).then((res) =>{
              let category=res.data;
              this.setState({name:category.name,description:category.description,image:category.image});

          });
      }
   
      onChangeTitle(e) {
        this.setState({
          name: e.target.value
        });
      }
      onChangeImage(e,image) {
        let file=e.target.files[0]
        this.setState({
          image: file.name
        });
      }
      onChangeDescription(e,editor) {
        const data = editor.getData();
        this.setState({description:data});
        console.log("STATE", {data})
      }
 
      handlecategory(e) {
        e.preventDefault();
        let category={description:this.state.description,name:this.state.name,image:this.state.image};
        console.log('category=>' +JSON.stringify(category));
   
       AdminService.editCategory(category,this.state.id).then(res=> {
           this.props.history.push("/admin/category");

       });
        }
    render() {
        return (
           
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
          <div className="row">
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Thêm thương hiệu mới</h4>
                  
                    <form className="forms-sample">
                    <Form.Group>
                        <label >Tên thương hiệu</label>
                        <Form.Control type="text" name="name" id="name" className="form-control" value={this.state.name}
                        onChange={this.onChangeTitle}/>
                      </Form.Group>
                      <Form.Group>
                        <label >Hình ảnh</label>
                        <img  className="img-sm" src={`${process.env.PUBLIC_URL}/resources/images/category/${this.state.image}`} ></img>
                        <Form.Control type="file" name="image" id="image" className="form-control" 
                        onChange={this.onChangeTitle}/>
                      </Form.Group>
                      <Form.Group>
                        <label >Mô tả thươn hiệu</label>
                        <CKEditor
      editor ={ClassicEditor}
       onInit = { editor =>{
           //// Here the editor is ready to be used
       }}
       value={this.state.description}
       onChange ={this.onChangeDescription}
       config = {
        {
           // plugins: [ Essentials ],
          ckfinder: {
              // The URL that the images are uploaded to.
              uploadUrl: '/upload', 
  
              // Enable the XMLHttpRequest.withCredentials property.
              withCredentials: true,
  
              // Headers sent along with the XMLHttpRequest to the upload server.
              headers: {
                  'X-CSRF-TOKEN': 'CSFR-Token',
                   Authorization: 'Bearer <JSON Web Token>'
              }
        } }

     }
       
     />
                      </Form.Group>
                     
                      
                      <div className="form-check">
                        
                      </div>
                      <button onClick={this.handlecategory}  className="btn btn-primary mr-2">Lưu</button>
                      <a type="submit" href="/admin/category" className="btn btn-primary mr-2">Quay lại</a>
                     
                    </form>
        
                  </div>
                </div>
              </div>
              </div>
          </main>
          </div>
          </div>
          </div>
        )
    }
}
