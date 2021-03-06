import React from 'react'
import { Form } from 'react-bootstrap';
import * as ClassicEditor  from '@ckeditor/ckeditor5-build-classic'
//import  * as Essentials from '@ckeditor/ckeditor5-essentials';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import AdminService from '../../../../services/Admin/AdminService';
import AdminMenu from '../../AdminMenu'
import AdminUser from '../../AdminUser'
import CKEditor from '@ckeditor/ckeditor5-react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
console.log(ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ));
export default class AdminViewBlog extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            id_blog: this.props.match.params.id_blog,
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
    componentDidMount(){
        AdminService.getBlogById(this.state.id_blog).then((res) =>{
            let blog=res.data;
            this.setState({title:blog.title,description:blog.description,
            image: blog.image,
            status: 3,
            modifieddate:blog.modifieddate,
           });

        });
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
  
       AdminService.editBlog(blog,this.state.id_blog).then(res=> {
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
     
            <h4 className="card-title">CHI TI???T TIN T???C</h4>
          
            <form className="forms-sample">
<Form.Group>
                <label >Ti??u ?????</label>
                <Form.Control type="text" name="title" id="title" className="form-control" value={this.state.title}
                />
              </Form.Group>

              <Form.Group>
                <label >H??nh ???nh</label>
                <img style={{ width: "1100px",height:"500px" }}  src={`${process.env.PUBLIC_URL}/resources/images/blog/${this.state.image}`} className=" lazyloaded" />
              </Form.Group>
              <Form.Group>
                <label >Ng??y vi???t</label>
                <Form.Control type="date" name="modifieddate" id="modifieddate" className="form-control" value={this.state.modifieddate}
                onChange={this.onChangemodifieddate}  />
              </Form.Group>


              <Form.Group>
                <label >M?? t??? th????n hi???u</label>
                {ReactHtmlParser(this.state.description) }
     </Form.Group>
<div className="form-check">
                
                </div>
   
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