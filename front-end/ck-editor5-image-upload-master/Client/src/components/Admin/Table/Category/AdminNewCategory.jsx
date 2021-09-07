import React from 'react'
import { Form } from 'react-bootstrap';
import * as ClassicEditor  from '@ckeditor/ckeditor5-build-classic'
//import  * as Essentials from '@ckeditor/ckeditor5-essentials';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import AdminService from '../../../../services/Admin/AdminService';
import AdminMenu from '../../AdminMenu'
import AdminUser from '../../AdminUser'
import CKEditor from '@ckeditor/ckeditor5-react'
console.log(ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ));
export default class AdminNewCategory extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            name: '',
            image: '',
            description: ''
        };
        this.handleBrand = this.handleBrand.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.ckeditorstate = this.ckeditorstate.bind(this);

    }

    onChangeTitle(e) {
        this.setState({
          name: e.target.value
        });
      }
      onChangeImage(e) {
        let file=e.target.files[0]
        this.setState({
          image: file.name
        });
  
      }

    ckeditorstate = (event, editor) =>{
        const data = editor.getData();
        this.setState({description:data});
        console.log("STATE", {data})
    }

    handleBrand(e) {
        e.preventDefault();
       let brand={description:this.state.description,name:this.state.name,image:this.state.image};
       console.log('brand=>' +JSON.stringify(brand));
  
       AdminService.creatCategory(brand).then(res=> {
        this.props.history.push("/admin/category");
  
    });
  };

    render(){
   console.log('STATE _', this.state);
       return(
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
                <Form.Control type="file" name="image" id="image" className="form-control"
                onChange={this.onChangeImage}  />
              </Form.Group>
         
              <Form.Group>
                <label >Mô tả thươn hiệu</label>
     <CKEditor
      editor ={ClassicEditor}
       onInit = { editor =>{
           //// Here the editor is ready to be used
       }}
       onChange ={this.ckeditorstate}
       value={this.state.description}
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
       
     /></Form.Group>
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
       );
    }
}