import React, { Component } from 'react'
import AdminMenu from '../../AdminMenu'
import AdminUser from '../../AdminUser'
import { confirmAlert } from 'react-confirm-alert'
import NumberFormat from "react-number-format";
import OrderService from '../../../../services/Order/OrderService';
import AdminService from '../../../../services/Admin/AdminService';
export default class AdminOrder extends Component {
    constructor(props){
        super(props)
        this.state= {
          user_id: this.props.match.params.user_id,
          menu: [],
          orders:[],
          showModeratorBoard: false,
          showAdminBoard: false,
          currentUser: undefined,
         
        }   
    }
    
    componentDidMount(){
      OrderService.getListOrders().then( res =>{
        this.setState({orders:res.data});
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

              <main className="col-md-9">
          {
               this.state.orders.map(
                order =>
          <article key={order.id} className="card mb-4">
          <header className="card-header">
          <button onClick={ () => this.deleteOrder(order.id_order)}  className="float-right"> Hủy đơn hàng</button>
          <a href={`/orderdetail/${order.id_order}`} class="float-right"> <i class="fa fa-print"></i> Xem chi tiết</a>

         
              <strong className="d-inline-block mr-3">Mã đơn hàng: {order.id_order}</strong>
              
            </header>
            <div className="card-body">
              <div className="row"> 
                <div className="col-md-8">
                  <h6 className="text-muted">Thông tin</h6>
                  <p>Họ tên:{order.fullname} <br />  
                    Số điện thoại: {order.phone} <br />
                    Email:{order.email} <br />
                    Địa chỉ: {order.address} <br /> 
                    
                  </p>
                </div>
                <div className="col-md-4">
                  <h6 className="text-muted">Thanh toán</h6>
                  <p>
                    <span className="b">Tổng số tiền: <NumberFormat
                                      value={order.totalprice}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                    /> </span>
                  </p>
                </div>
              </div> {/* row.// */}
            </div> {/* card-body .// */}
            <header className="card-header">
            {order.status==0 ? (
                         <a  style={{textDecoration:"none", color:"red"}}  class="float-right">  ĐANG VẬN CHUYỂN</a>
            ):(
              <div><a  style={{textDecoration:"none", color:"red"}}  class="float-right">  GIAO HÀNG THÀNH CÔNG</a></div>
            )}
            </header>
          </article>
               )
               }

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
