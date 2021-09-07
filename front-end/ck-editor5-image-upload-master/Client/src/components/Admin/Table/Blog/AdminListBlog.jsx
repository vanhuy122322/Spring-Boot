import React, { Component } from 'react'
import AdminMenu from '../../AdminMenu'
import AdminUser from '../../AdminUser'
import { confirmAlert } from 'react-confirm-alert'
import NumberFormat from "react-number-format";

import AdminService from '../../../../services/Admin/AdminService';
export default class AdminListBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
          content: [],
          currentPage: 1,
          size: 10,
          disabled1: "",
          disabled2: "",
          product:'',
          isDialogOpen: false
        };
    
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.findAll = this.findAll.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.deleteBrand = this.deleteBrand.bind(this);
      }
      changcurrentPage(currentPage) {
        let condition = Math.ceil(this.state.totalElements / this.state.size);
        if (this.state.currentPage < condition)
          if (currentPage === 1) this.setState({ disabled1: "disabled" });
          else this.setState({ disabled1: " " });
        if (currentPage === condition) this.setState({ disabled2: "disabled" });
        else this.setState({ disabled2: " " });
      }
      previousPage() {
        if (this.state.currentPage > 1) this.state.currentPage -= 1;
        this.findAll(this.state.currentPage);
        this.changcurrentPage(this.state.currentPage);
      }
      nextPage() {
        let condition = Math.ceil(this.state.totalElements / this.state.size);
        if (this.state.currentPage < condition) this.state.currentPage += 1;
        this.findAll(this.state.currentPage);
        this.changcurrentPage(this.state.currentPage);
      }
      findAll(currentPage) {
        currentPage -= 1;
        AdminService.getAllBlog(currentPage, this.state.size)
          .then((response) => response.data)
          .then((data) => {
            this.setState({
              content: data.content,
              totalPages: data.totalPages,
              totalElements: data.totalElements,
              currentPage: data.number + 1,
            });
          });
      }
      componentDidMount() {
        this.changcurrentPage(this.state.currentPage);
        this.findAll(this.state.currentPage);
      }
      addProduct() {
        this.props.history.push("/createblog");
      }
      editEmployee(id) {
        this.props.history.push(`/$${id}`);
      }
      checkEmployee(id) {
        this.props.history.push(`/£${id}`);
      }
      deleteBrand(id) {
       
        AdminService.deleteBlog(id).then((res) => {
          this.setState({
            content: this.state.content.filter((product) => product.id !== id),
          });
        });
        this.props.history.push("/admin/blog");
      }
     
   
      submit = () => {
        confirmAlert({
          title: 'Confirm to submit',
          message: 'Are you sure to do this.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => alert('Click Yes')
            },
            {
              label: 'No',
              onClick: () => alert('Click No')
            }
          ]
        })
      }
      handleClickCustomUI = (id) => {
        confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <div className='custom-ui'>
                <h1>Bạn có chắc không?</h1>
                <p>Bạn muốn xóa sản phẩm này không ?</p>
                <button className="btn btn-primary btn-block" onClick={onClose}>Đóng</button>
                <button className="btn btn-primary btn-block" onClick={this.deleteBrand(id)}>Xóa</button>
              </div>
            )
          }
        })
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
          <div className="">
            <div className="card mb-12">
              <div className="card-header">
           
               
                <h3>
                  <i className="fas fa-table me-1" />
                  Tin tức
                </h3>{" "}
                <button
                  type="text"
                  className="btn btn-primary"
                  onClick={this.addProduct}
                >
                  <i class="fa fa-plus" aria-hidden="true"></i> Thêm mới
                </button>
              </div>

              <div className="">
                <table class="table table-hover">
                  <thead class="thead-light">
                    <tr>
                      <th>Mã Tin tức</th>
              
                      <th>Tiêu đề</th>
                     
                      <th>Lựa chọn</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    {this.state.content.map((allbrand) => (
                      <tr>
                        <td>{allbrand.id}</td>
                        
                       
                        <td>{allbrand.title}  </td>

                        
                        <td>
                        
                        <button
                         style={{ marginLeft: "10px" }}
                          className="btn btn-warning"
                          onClick={() => this.checkEmployee(allbrand.id)}
                        >
                         
                        <i class="fa fa-eye"></i>
                        </button>
                        <button
                         style={{ marginLeft: "10px" }}
                          className="btn btn-success"
                          onClick={() => this.editEmployee(allbrand.id)}
                        >
                         
                        <i class="fas fa-edit"></i>
                        </button>
                        
                      
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => this.handleClickCustomUI(allbrand.id)}
                          className="btn btn-danger"
                        >
                         <i class="fa fa-trash" aria-hidden="true"></i>{" "}
                        </button>
                      
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ paddingBottom: "10px",float: "right" }}>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className={"page-item " + this.state.disabled1}>
                        <button
                          className="page-link"
                          href="#"
                          onClick={this.previousPage}
                        >
                          <i class="fa fa-arrow-left" aria-hidden="true"></i>
                        </button>
                      </li>
                      <li className="page-item active">
                        <a
                          className="page-link"
                          value={this.state.currentPage}
                          onChange={this.changcurrentPage}
                        >
                          {this.state.currentPage}
                        </a>
                      </li>
                      <li className={"page-item " + this.state.disabled2}>
                        {" "}
                        <button className="page-link" onClick={this.nextPage}>
                          <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        </button>
                      </li>
                    </ul>
                  </nav>
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
