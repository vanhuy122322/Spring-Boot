import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import * as ClassicEditor  from '@ckeditor/ckeditor5-build-classic'
//import  * as Essentials from '@ckeditor/ckeditor5-essentials';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import AdminService from '../../../../services/Admin/AdminService';
import BrandService from '../../../../services/Home/BrandService';
import CategoryService from '../../../../services/Home/CategoryService';
import AdminMenu from '../../AdminMenu'
import AdminUser from '../../AdminUser'
import CKEditor from '@ckeditor/ckeditor5-react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
console.log(ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ));

export default class AdminViewPolicy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id_policy: this.props.match.params.id_policy,
          
          name: "",
          description: "",
        };
        this.ckeditorstate = this.ckeditorstate.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.handleBrand = this.handleBrand.bind(this);
      }
      componentDidMount(){
          AdminService.getPolicyById(this.state.id_policy).then((res) =>{
              let menu=res.data;
              this.setState({name:menu.name,description:menu.description});

          });
      }
      onChangeTitle(e) {
        this.setState({
          name: e.target.value
        });
      }
      ckeditorstate = (event, editor) =>{
        const data = editor.getData();
        this.setState({description:data});
        console.log("STATE", {data})
    }
 
 



    
      handleBrand(e) {
        e.preventDefault();
    
       let policy={name:this.state.name,description:this.state.description};
       console.log('menu=>' +JSON.stringify(policy));

       AdminService.editMenu(policy,this.state.id_policy).then(res=> {
           this.props.history.push("/admin/policy");

       });
        }
     
   
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
              
                     <h4 className="card-title">THÊM CHÍNH SÁCH</h4>
                   
                     <form className="forms-sample">
         <Form.Group>
                         <label >Tiêu đề chính sách</label>
                         <Form.Control type="text" name="title" id="title" className="form-control" value={this.state.name}
                         onChange={this.onChangeTitle}/>
                       </Form.Group>
                    
         
         
                       <Form.Group>
                         <h1 >Mô tả chính sách</h1>
                        <div style={{ border:"1px solid black", marginRight:"10px"}}> {ReactHtmlParser(this.state.description) }</div>
             </Form.Group>
         <div className="form-check">
                         
                         </div>
                        
                         <a style={{textDecoration:"none"}} type="submit" href="/admin/policy" className="btn btn-primary mr-2">Quay lại</a>
         
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