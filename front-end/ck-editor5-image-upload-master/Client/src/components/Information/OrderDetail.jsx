import React, { Component } from 'react';
import OrderService from '../../services/Order/OrderService';
import FooterComponent from '../Home/FooterComponent';
import HeaderComponent from '../Home/HeaderComponent';
import My from './My';
import NumberFormat from "react-number-format";
class OrderDetail extends Component {
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
    </div> {/* containers .//  */}
  </section>
  {/* ========================= SECTION CONTENT END// ========================= */}
  {/* ========================= FOOTER ========================= */}
  <FooterComponent/>
</div>

        );
    }
}

export default OrderDetail;