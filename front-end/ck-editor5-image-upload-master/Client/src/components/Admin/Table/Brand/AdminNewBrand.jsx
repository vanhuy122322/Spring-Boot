import React, { Component } from 'react'
import AdminMenu from '../../AdminMenu'
import AdminUser from '../../AdminUser'
import { confirmAlert } from 'react-confirm-alert'
import NumberFormat from "react-number-format";

import AdminService from '../../../../services/Admin/AdminService';
import { Form } from 'react-bootstrap';

export default class AdminNewBrand extends Component {
    constructor(props) {
        super(props);
        this.handleBrand = this.handleBrand.bind(this);
      
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.state = {
          description: "",
          title: "",
        };
      }
   
      onChangeTitle(e) {
        this.setState({
          title: e.target.value
        });
      }
      onChangeDescription(e) {
        this.setState({
          description: e.target.value
        });
      }
 



    
      handleBrand(e) {
        e.preventDefault();
    
       let brand={description:this.state.description,title:this.state.title};
       console.log('brand=>' +JSON.stringify(brand));

       AdminService.creatBrand(brand).then(res=> {
           this.props.history.push("/admin/brand");

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
                    <Form.Control type="text" name="title" id="title" className="form-control" value={this.state.title}
                    onChange={this.onChangeTitle}/>
                  </Form.Group>
                 
                  <Form.Group>
                    <label >Mô tả thươn hiệu</label>
                    <textarea type="text" className="form-control"  value={this.state.description}
                    onChange={this.onChangeDescription}  />
                  </Form.Group>
                 
                  
                  <div className="form-check">
                    
                  </div>
                  <button onClick={this.handleBrand}  className="btn btn-primary mr-2">Lưu</button>
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
