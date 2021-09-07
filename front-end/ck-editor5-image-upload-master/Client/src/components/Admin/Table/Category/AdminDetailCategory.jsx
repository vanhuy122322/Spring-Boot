import React, { Component } from 'react'
import AdminMenu from '../../AdminMenu'
import AdminUser from '../../AdminUser'
import { confirmAlert } from 'react-confirm-alert'
import NumberFormat from "react-number-format";

import AdminService from '../../../../services/Admin/AdminService';
import { Form } from 'react-bootstrap';

export default class AdminDetailCategory extends Component {
    constructor(props){
        super(props)
    
        this.state= {
            id_category: this.props.match.params.id_category,
          category:[],

        
        }
      
        
    }
    componentDidMount(){
        AdminService.getCategoryById(this.state.id_category).then( res =>{
          this.setState({category:res.data});
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
                <h4 className="card-title">Xem chi tiết thương hiệu</h4>
              
                <form className="forms-sample">
                  <Form.Group>
                    <label >Tên thương hiệu</label>
                    <Form.Control type="text" className="form-control"  value={this.state.category.title} />
                  </Form.Group>
                  <Form.Group>
                    <label >Hình ảnh</label>
                    <img  className="img-sm" src={`${process.env.PUBLIC_URL}/resources/images/category/${this.state.category.image}`} ></img>
                  </Form.Group>
                  <Form.Group>
                    <label >Mô tả thươn hiệu</label>
                    <textarea type="text" className="form-control" value={this.state.category.description}  />
                  </Form.Group>
                  
                  <div className="form-check">
                    
                  </div>
                  <a type="submit" href="/admin/brand" className="btn btn-primary mr-2">Quay lại</a>
              
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
