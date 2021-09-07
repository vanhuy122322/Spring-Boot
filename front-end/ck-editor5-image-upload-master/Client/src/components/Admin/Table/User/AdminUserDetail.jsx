import React, { Component } from 'react'
import AdminMenu from '../../AdminMenu'
import AdminUser from '../../AdminUser'
import { confirmAlert } from 'react-confirm-alert'
import NumberFormat from "react-number-format";

import AdminService from '../../../../services/Admin/AdminService';
import { Form } from 'react-bootstrap';

export default class AdminUserDetail extends Component {
    constructor(props){
        super(props)
    
        this.state= {
            id_user: this.props.match.params.id_user,
          users:[],

        
        }
      
        
    }
    componentDidMount(){
        AdminService.getUserbyId(this.state.id_user).then( res =>{
          this.setState({users:res.data});
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
                <h4 className="card-title">Thông tin người dùng</h4>
              
                <form className="forms-sample">
                  <Form.Group>
                    <label >Họ tên</label>
                    <Form.Control type="text" className="form-control"  value={this.state.users.name} />
                  </Form.Group>
                  <Form.Group>
                    <label >Email</label>
                    <Form.Control type="text" className="form-control"  value={this.state.users.email} />
                  </Form.Group>
                  <Form.Group>
                    <label >Số điện thoại</label>
                    <Form.Control type="text" className="form-control"  value={this.state.users.phone} />
                  </Form.Group>
                  <Form.Group>
                    <label >Địa chỉ</label>
                    <textarea type="text" className="form-control"  value={this.state.users.address} />
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
