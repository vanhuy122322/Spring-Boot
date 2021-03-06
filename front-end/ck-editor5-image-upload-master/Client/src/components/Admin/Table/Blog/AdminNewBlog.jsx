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
export default class AdminNewBlog extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            title: '',
            image: '',
            description: '',
            state: '',
            modifieddate: '',
        };
        this.handleBrand = this.handleBrand.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.ckeditorstate = this.ckeditorstate.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangemodifieddate = this.onChangemodifieddate.bind(this);
    }
    onChangeState(e) {
      let ste=3
      this.setState({
        state: e.target.value
      });
    }
    onChangemodifieddate(e) {
      this.setState({
        modifieddate: e.target.value
      });
    }
    onChangeTitle(e) {
        this.setState({
          title: e.target.value
        });
      }
      onChangeImage(e) {
        let file=e.target.files[0]
        this.setState({
          image: file.name
        });
        console.log("STATE", {file})
  
      }

    ckeditorstate = (event, editor) =>{
        const data = editor.getData();
        this.setState({description:data});
        console.log("STATE", {data})
    }

    handleBrand(e) {
        e.preventDefault();
       let blog={description:this.state.description,title:this.state.title,image:this.state.image,state:3,modifieddate:this.state.modifieddate};
       console.log('brand=>' +JSON.stringify(blog));
  
       AdminService.creatBlog(blog).then(res=> {
        this.props.history.push("/admin/blog");
  
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
  <div className="rows"   style={{ marginLeft: "10px" }}>
     
            <h4 className="card-title">TH??M TIN T???C</h4>
          
            <form className="forms-sample">
<Form.Group>
                <label >Ti??u ?????</label>
                <Form.Control type="text" name="title" id="title" className="form-control" value={this.state.title}
                onChange={this.onChangeTitle}/>
              </Form.Group>

              <Form.Group>
                <label >H??nh ???nh</label>
                <Form.Control type="file" name="image" id="image" className="form-control"
                onChange={this.onChangeImage}  />
              </Form.Group>
              <Form.Group>
                <label >Ng??y vi???t</label>
                <Form.Control type="date" name="modifieddate" id="modifieddate" className="form-control" value={this.state.modifieddate}
                onChange={this.onChangemodifieddate}  />
              </Form.Group>


              <Form.Group>
                <label >M?? t??? th????n hi???u</label>
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
                <button onClick={this.handleBrand}  className="btn btn-primary mr-2">L??u</button>
                <a type="submit" href="/admin/brand" className="btn btn-primary mr-2">Quay l???i</a>

      {/* <textarea type="text"  cols="30" rows="15" value={this.state.content}   onChange={this.handleStateChanges} className="form-control" name="content" placeholder=" Enter Phone" /> */}
  
      </form>

</div>

</main>
  </div>
  </div>
  </div>
       );
    }
}