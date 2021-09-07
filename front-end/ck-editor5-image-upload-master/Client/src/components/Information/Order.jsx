import React, { Component } from 'react';
import OrderService from '../../services/Order/OrderService';
import FooterComponent from '../Home/FooterComponent';
import HeaderComponent from '../Home/HeaderComponent';
import My from './My';
import NumberFormat from "react-number-format";

class Order extends Component {
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
    this.deleteOrder=this.deleteOrder.bind(this);
   
}
deleteOrder(id){
  OrderService.deleteOrder(id).then( res =>{ 
     this.setState({orders: this.state.orders.filter(order => order.id_order !== id)});
 });
}

componentDidMount(){
  OrderService.getListOrder(this.state.user_id).then( res =>{
    this.setState({orders:res.data});
});

}  

    render() {
        return (
            <div>
              
  <HeaderComponent/>
  {/* ========================= SECTION PAGETOP ========================= */}

  <section className="section-pagetop bg-gray">
    <div className="containers">
      <h2 className="title-page">Tài khoản của tôi</h2>
    </div> {/* containers //  */}
  </section>
  {/* ========================= SECTION PAGETOP END// ========================= */}
  {/* ========================= SECTION CONTENT ========================= */}
  <section className="section-content padding-y">
    <div className="containers">
      <div className="row">
        <My/>
          <main className="col-md-9">
          {
               this.state.orders.map(
                order =>
          <article key={order.id} className="card mb-4">
          <header className="card-header">
          <button onClick={ () => this.deleteOrder(order.id_order)}  className="float-right"> Hủy đơn hàng</button>
          <a  style={{textDecoration:"none"}} href={`/xem-chi-tiet/${order.id_order}`} class="float-right"> <i class="fa fa-print"></i> Xem chi tiết</a>

         
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
    </div> {/* containers .//  */}
  </section>
  {/* ========================= SECTION CONTENT END// ========================= */}
  {/* ========================= FOOTER ========================= */}
  <FooterComponent/>
</div>

        );
    }
}

export default Order;