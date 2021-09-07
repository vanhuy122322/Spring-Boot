import React, { Component } from 'react'
import AdminMenu from '../../AdminMenu'
import AdminUser from '../../AdminUser'
import { confirmAlert } from 'react-confirm-alert'
import NumberFormat from "react-number-format";

import AdminService from '../../../../services/Admin/AdminService';
import { Form } from 'react-bootstrap';

export default class AdminEditMenu extends Component {
    constructor(props) {
        super(props);
        this.handleBrand = this.handleBrand.bind(this);
      
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.state = {
            id_menu: this.props.match.params.id_menu,
          
          name: "",
          rowguid: "",
        };
      }
      componentDidMount(){
          AdminService.getMenuById(this.state.id_menu).then((res) =>{
              let menu=res.data;
              this.setState({name:menu.name,rowguid:menu.rowguid});

          });
      }
   
      onChangeTitle(e) {
        this.setState({
            name: e.target.value
        });
      }
      onChangeDescription(e) {
        this.setState({
            rowguid: e.target.value
        });
      }
 



    
      handleBrand(e) {
        e.preventDefault();
    
       let menu={name:this.state.name,rowguid:this.state.rowguid};
       console.log('menu=>' +JSON.stringify(menu));

       AdminService.editMenu(menu,this.state.id_menu).then(res=> {
           this.props.history.push("/admin/menu");

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
                <h4 className="card-title">Thêm menu mới</h4>
              
                <form className="forms-sample">
                <Form.Group>
                    <label >Tên Menu</label>
                    <Form.Control type="text" name="name" id="name" className="form-control" value={this.state.name}
                    onChange={this.onChangeTitle}/>
                  </Form.Group>
                 
                  <Form.Group>
                    <label >Đường dẫn</label>
                    <Form.Control type="text" name="rowguid" id="rowguid" className="form-control" value={this.state.rowguid}
                    onChange={this.onChangeDescription}  />
                  </Form.Group>
                 
                  
                  <div className="form-check">         
                  </div>
                  <button onClick={this.handleBrand}  className="btn btn-primary mr-2">Lưu</button>
                  <a type="submit" href="/admin/menu" className="btn btn-primary mr-2">Quay lại</a>
                 
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
