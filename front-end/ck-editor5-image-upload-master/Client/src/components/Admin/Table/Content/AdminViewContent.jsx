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

export default class AdminViewContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id_content: this.props.match.params.id_content,
          
          name: "",
          description: "",
          title: "",
          phone: "",
          status: "",
          email: "",
        };
        
      }
      componentDidMount(){
          AdminService.getContactbyId(this.state.id_content).then((res) =>{
              let content=res.data;
              this.setState({name:content.name,description:content.description,status:content.status,title:content.title,phone:content.phone,email:content.email});

          });
      }
    
 
 



    
      handleBrand(e) {
        e.preventDefault();
    
       let policy={name:this.state.name,description:this.state.description};
       console.log('content=>' +JSON.stringify(policy));

       AdminService.editMenu(policy,this.state.id_policy).then(res=> {
           this.props.history.push("/admin/policy");

       });
        }
        getTitle(){
            if(this.state.status == 1)
            {
                return ( <div> 
                <Form.Control type="text" name="title" id="title" className="form-control" value="Tư vấn"
                       />
            
                </div>
                )
            }
            if(this.state.status == 2)
            {
              return ( <div> 
             
             
             <Form.Control type="text" name="title" id="title" className="form-control" value="Khiếu nại - Phản ánh"
                       />
            
                
    
              </div>
              )
            }
            if(this.state.status == 4)
            {
              return ( <div> 
       <Form.Control type="text" name="title" id="title" className="form-control" value="Góp ý kiến"
                       />
            
              </div>
              )
            }
            if(this.state.status == 3)
            {
              return ( <div> 
       <Form.Control type="text" name="title" id="title" className="form-control" value="Hợp tác với shop đồng hồ"
                       />
            
              </div>
              )
            }
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
                         <label >Chủ đề</label>
                         <div>
                         {
                             this.getTitle()
                         }
                         </div>
                        
                       </Form.Group>
                       <Form.Group>
                         <label >Tiêu đề </label>
                         <Form.Control type="text" name="title" id="title" className="form-control" value={this.state.title}
                       />
                       </Form.Group>
         <Form.Group>
                         <label >Họ tên </label>
                         <Form.Control type="text" name="title" id="title" className="form-control" value={this.state.name}
                       />
                       </Form.Group>
                       <Form.Group>
                         <label >Email </label>
                         <Form.Control type="text" name="title" id="title" className="form-control" value={this.state.email}
                       />
                       </Form.Group>
                    
                       <Form.Group>
                         <label >Số điện thoại </label>
                         <Form.Control type="text" name="title" id="title" className="form-control" value={this.state.phone}
                       />
                       </Form.Group>
                    
         
                       <Form.Group>
                         <label >Nội dung</label>
                        <textarea style={{ width:"100%", border:"1px solid black", marginRight:"10px"}} value={ReactHtmlParser(this.state.description) } /> 
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