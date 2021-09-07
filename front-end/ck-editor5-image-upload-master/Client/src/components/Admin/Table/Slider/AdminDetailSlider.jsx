import React, { Component } from 'react'

import AdminMenu from '../../AdminMenu'
import AdminUser from '../../AdminUser'
import { confirmAlert } from 'react-confirm-alert'
import NumberFormat from "react-number-format";
import { Form } from 'react-bootstrap';
import AdminService from '../../../../services/Admin/AdminService';

export default class AdminDetailSlider extends Component {
    constructor(props) {
        super(props);
        this.handleBrand = this.handleBrand.bind(this);
      
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.state = {
            id_slider: this.props.match.params.id_slider,
          
          title: "",
          image: "",
        };
      }
      componentDidMount(){
          AdminService.getSliderById(this.state.id_slider).then((res) =>{
              let slider=res.data;
              this.setState({title:slider.title,image:slider.image});

          });
      }
   
      onChangeTitle(e) {
        this.setState({
          title: e.target.value
        });
      }
      onChangeDescription(e) {
        let file=e.target.files[0]
        this.setState({
          image: file.name
        });
      }
 



    
      handleBrand(e) {
        e.preventDefault();
    
       let brand={title:this.state.title,image:this.state.image};
       console.log('brand=>' +JSON.stringify(brand));

       AdminService.editSlider(brand,this.state.id).then(res=> {
           this.props.history.push("/admin/brand");

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
           <div className="row">
               <div className="col-md-6 grid-margin stretch-card">
                 <div className="card">
                   <div className="card-body">
                     <h4 className="card-title">Thêm thương hiệu mới</h4>
                   
                     <form className="forms-sample">
         <Form.Group>
                         <label >Tên thương hiệu</label>
                         <Form.Control type="text" name="title" id="title" className="form-control" value={this.state.title}
                         onChange={this.onChangeTitle}/>
                       </Form.Group>
         
                       <Form.Group>
                         <label >Hình ảnh</label>
                         <img className="imageslider" src={`${process.env.PUBLIC_URL}/resources/images/slider/${this.state.image}`} ></img>
                       
                         <Form.Control type="file" name="image" id="image" className="form-control"
                         onChange={this.onChangeDescription}  />
                       </Form.Group>
                  
                     
         <div className="form-check">
                         
                         </div>
                         <button onClick={this.handleBrand}  className="btn btn-primary mr-2">Lưu</button>
                         <a type="submit" href="/admin/slider" className="btn btn-primary mr-2">Quay lại</a>
         
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
            )
        }
    }
    