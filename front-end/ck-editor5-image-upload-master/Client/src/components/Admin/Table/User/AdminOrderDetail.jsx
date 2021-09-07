import React, { Component } from 'react'
import AdminMenu from '../../AdminMenu'
import AdminUser from '../../AdminUser'
import { confirmAlert } from 'react-confirm-alert'
import NumberFormat from "react-number-format";
import OrderService from '../../../../services/Order/OrderService';
import AdminService from '../../../../services/Admin/AdminService';
export default class AdminOrderDetail extends Component {
    constructor(props){
        super(props)
        this.state= {
          id_order: this.props.match.params.id_order,
          menu: [],
          showModeratorBoard: false,
          showAdminBoard: false,
          currentUser: undefined,
         orders:[],
         orderdetails:[]
    
        
    
        }
       
    }
    componentDidMount(){
      OrderService.getOrderDetail(this.state.id_order).then( res =>{
        this.setState({orders:res.data});
    });
    OrderService.getListOrderDetail(this.state.id_order).then( res =>{
        this.setState({orderdetails:res.data});
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
          <div className="">
            <div className="card mb-12">
              <div className="card-header">
           
               
                <h3>
                  <i className="fas fa-table me-1" />
                  ĐƠN HÀNG
                </h3>{" "}
               
              </div>

              <main className="col-md-11" style={{ paddingTop:"20px",marginLeft:"20px" }}>
         
         <article className="card mb-4">
         <header className="card-header">
             
             <strong className="d-inline-block mr-3">Order ID: {this.state.orders.id_order}</strong>
             
           </header>
           <div className="card-body">
             <div className="row"> 
               <div className="col-md-8">
                 <h6 className="text-muted">Thông tin</h6>
                 <p>Họ tên:{this.state.orders.fullname} <br />  
                   Số điện thoại: {this.state.orders.phone}  <br />
                   Email:{this.state.orders.email}<br />
                   Địa chỉ: {this.state.orders.address} <br /> 
                   
                 </p>
               </div>
               <div className="col-md-4">
                 <h6 className="text-muted">Thanh toán</h6>
                 <span className="text-success">
                   <i className="fab fa-lg fa-cc-visa" />
                   Visa:  {this.state.orders.visa} 
                 </span>
                 <p>
                
                   <span className="b">Tổng số tiền: <NumberFormat
                                     value={this.state.orders.totalprice}
                                     displayType={"text"}
                                     thousandSeparator={true}
                                   /> </span>
                 </p>
               </div>
             </div> {/* row.// */}
           </div> {/* card-body .// */}
           <div className="table-responsive">
             <table className="table table-hover">
               <tbody>
               {
              this.state.orderdetails.map(
               orderdetail =>
                 <tr>
                   <td width={65}>
                     <img src={`${process.env.PUBLIC_URL}/resources/images/product/${orderdetail.image}`} className="img-xs border" />
                   </td>
                   <td> 
                     <p className="title mb-0">Đồng hồ {orderdetail.title}</p>
                     <var className="price text-muted"><NumberFormat value={`${orderdetail.price}`} displayType={'text'} thousandSeparator={true} prefix={''} />đ</var>
                   </td>
                   <td> Số lượng <br /> {orderdetail.quantity} </td>
                  
                   <td> Thành tiền <br /><NumberFormat value={`${orderdetail.quantity*orderdetail.price}`} displayType={'text'} thousandSeparator={true} prefix={''} />đ  </td>
                   
                 </tr>
              )}
               </tbody></table>
           </div> {/* table-responsive .end// */}
         </article>
        </main> {/* col.// */}
            </div>
          </div>
        </main>
        </div>
        </div>
        </div>
     
          
        )
    }
}
