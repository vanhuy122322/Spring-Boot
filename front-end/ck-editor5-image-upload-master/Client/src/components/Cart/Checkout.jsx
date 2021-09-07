import React, { Component } from 'react';
import {total,list,quantity,add,remove,onChange,} from "cart-localstorage";
import NumberFormat from "react-number-format";
import FooterComponent from '../Home/FooterComponent'
import HeaderComponent from '../Home/HeaderComponent'
import AuthService from "../../services/User/auth.service";
import OrderService from '../../services/Order/OrderService';
import axios from 'axios';
const tong = total();
const userid=JSON.parse(localStorage.getItem("user"))
class Order extends Component {
  constructor(props){
    super(props)
    this.logOut = this.logOut.bind(this);
    this.state= {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
     id:this.props.match.params.id,
     fullname:"",
     email:"",
     phone:"",
     address:"",
     visa:"",

     status:1,  
     id_order:localStorage.getItem("cart_id"),
     user_id:userid.id,
     totalprice:tong,
carts:list()
    };
    this.changeFullNameHandler =this.changeFullNameHandler.bind(this);
    this.changeEmailHandler =this.changeEmailHandler.bind(this);
    this.changePhoneHandler =this.changePhoneHandler.bind(this);
    this.changeAddressHandler =this.changeAddressHandler.bind(this);
    this.changeVisaHandler =this.changeVisaHandler.bind(this);
    this.changeIdOrderHandler =this.changeIdOrderHandler.bind(this);
    this.changeUserIdHandler =this.changeUserIdHandler.bind(this);
    this.changeTotalPriceHandler =this.changeTotalPriceHandler.bind(this);
    
}
componentDidMount(){
const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
}  
saveOrder=(e)=>{
  e.preventDefault();
  let info ={
    fullname:this.state.fullname,
    email:this.state.email,
    phone:this.state.phone,
    address:this.state.address,
    visa:this.state.visa,
    id_order:this.state.id_order,
    user_id:this.state.user_id,
    totalprice:this.state.totalprice,
    
    status:0,
  };
  console.log("info =>" +JSON.stringify(info));
 OrderService.CreateInfos(info).then((res) =>{
  alert("Đặt hàng thành công")
  });
  let data=localStorage.getItem("__cart");
  axios.post("http://localhost:8080/order", JSON.parse(data)).then(res =>console.log("Thành công"))
  .catch(e => console.log("Thất bại"));

  localStorage.removeItem("__cart");
  localStorage.removeItem("cart_id");
  this.props.history.push("/");
};
changeFullNameHandler(event){
this.setState({fullname:event.target.value});
};

changeEmailHandler (event){
  this.setState({email:event.target.value});
  };


changePhoneHandler(event){
    this.setState({phone:event.target.value});
    };
    

   changeAddressHandler(event){
   this.setState({address:event.target.value});
   };


  changeVisaHandler(event){
  this.setState({visa:event.target.value});
  };

  changeIdOrderHandler(event){
    this.setState({id_order:event.target.value});
    };

changeUserIdHandler(event){
this.setState({user_id:event.target.value});
  };

  changeTotalPriceHandler(event){
    this.setState({totalprice:event.target.value});
      };
logOut() {
  AuthService.logout();
}

    render() { 
      const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
        return (
            <div>
  <HeaderComponent/>
  {/* ========================= SECTION CONTENT ========================= */}
  <div className="containers"> {/*<table className="table table-border table-shopping-cart">
                        <thead className="text-muted">
                          <tr className="small text-uppercase">
                          
                            <th scope="col">Hình ảnh</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col" colspan="2">
                            Đơn giá
                            </th>
                            
                            
                            <th scope="col" className="text-right">
                              {" "}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.carts.map((cat) => (
                            <tr>
                             
                              <td>
                              <img className="imagesss" src={`${process.env.PUBLIC_URL}/resources/images/product/${cat.image}`} alt="" />
                              </td>
                              <td>
                                <figure className="itemside">
                                  <figcaption className="info">
                                    <a className="title text-dark">{cat.title}</a>
                                  </figcaption>
                                </figure>
                              </td>
    
                              <td>{cat.quantity}</td>
                              <td style={{ width: "30px" }}>
                                <a
                                  href=""
                                  onClick={(e) =>
                                    this.AddCart(
                                      cat.id,
                                      cat.title,
                                      cat.price,
                                      cat.image,
                                      e
                                    )
                                  }
                                >
                                 
                                </a>
                              </td>
    
                              
                              <td style={{ width: "30px" }}>
                                <div className="price-wrap">
                                  <var className="price">
                                    <NumberFormat
                                    value={cat.price * cat.quantity}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                    />
                                    đ
                                  </var>
                                </div>{" "}
                              
                              </td>
                              
                             
                            </tr>
                          ))}
                        </tbody>
                      </table>
                                */}
                                <div className="_1WlhIE">
                                <div className="_1p19xl"
                                ><div className="ktZs2X">
                                  <div className="_1_W4l_">
                                    <div className="_3GZI6L mpT3lP">
                                      <div className="_3NO6B5">Sản phẩm</div>
                                      </div>
                                      <div className="_3GZI6L _2vvZhb" />
                                      <div className="_3GZI6L">Đơn giá</div>
                                      <div className="_3GZI6L">Số lượng</div>
                                      <div className="_3GZI6L _17w1DK">Thành tiền</div>
                                      </div>
                                      </div>
                                      <div>
                                        
                                        <div className="jNDkp2">
                                          <div>
                                            <div className="QjLA16">
                                             
                                                      <div className="_1oOvbg">
                                                      {this.state.carts.map((cat) => (
                                                        <div className="_3HkBPE _Fqc2-">
                                                          <div className="_1ASQkt _2rJzUE">
                                                            <img className="_1Qtf1H" src={`${process.env.PUBLIC_URL}/resources/images/product/${cat.image}`} width={40} height={40} />
                                                            <span className="_11r44J">
                                                              <span className="_3F5vLQ">Đồng hồ {cat.title}</span>
                                                              </span>
                                                              </div>
                                                             
                                                                <div className="_11ASQkt">  <NumberFormat
                                      value={cat.price}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                    />
                                    đ</div>
                                                                <div className="_1ASQkt">{cat.quantity}</div>
                                                                <div className="_1ASQkt _2z5WqO"> <NumberFormat
                                      value={cat.price * cat.quantity}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                    />
                                    đ</div>
                                                                </div>
                                                                 ))}
                                                             </div>
                                                     
                                                             </div>
                                                             <div className="_1MFx1Y"><div className="_3519w5">Tổng số tiền:</div><div className="-c5EIK"><NumberFormat
                              value={tong}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                            đ</div></div>
</div></div></div></div>
</div>
                      <section className="section-content padding-y">
    <div className="containers">
      <div className="row">
      <div className="col card mb-4">
      {currentUser ?(
        <div className="card-body">
          <h4 className="card-title mb-3">Thông tin giao hàng</h4>
         
          <div className="form-row">
            <div className="col form-group">
              <label>Họ tên:</label>
              <input type="text" className="form-control" id="fullname" name="fullname"  value={this.state.fullname} onChange={this.changeFullNameHandler} placeholder />
            </div> {/* form-group end.// */}
          </div> {/* form-row end.// */}
          <div className="form-row">
            <div className="col form-group">
              <label>Email</label>
              <input type="email" className="form-control" id="email" name="email"  value={this.state.email} onChange={this.changeEmailHandler}  placeholder />
            </div> {/* form-group end.// */}
            <div className="col form-group">
              <label>Phone</label>
              <input type="text" className="form-control" id="phone" name="phone"  value={this.state.phone} onChange={this.changePhoneHandler}  placeholder />
            </div> {/* form-group end.// */}
          </div> {/* form-row end.// */}
          <div className="form-group">
            <label>Địa chỉ</label>
            <textarea className="form-control" id="address" name="address"  value={this.state.address} onChange={this.changeAddressHandler} rows={2} defaultValue={""} />
          </div> {/* form-group// */}  
        </div> ):(
                        <div></div>
                      )}
      </div>  
      
      <div className="col card mb-4">
        <div className="card-body">
          <h4 className="card-title mb-4">Thanh toán</h4>
          <form role="form" style={{maxWidth: '380px'}}>
            <div className="form-group">
              <label htmlFor="username">Tên người dùng</label>
              <input type="text" className="form-control" name="username" placeholder="Ex. John Smith" required />
            </div> {/* form-group.// */}
            <div className="form-group">
              <label htmlFor="cardNumber">Số thẻ</label>
              <div className="input-group">
                <input type="text" className="form-control" id="visa" name="visa"  value={this.state.visa} onChange={this.changeVisaHandler} name="cardNumber" placeholder />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fab fa-cc-visa" /> &nbsp; <i className="fab fa-cc-amex" /> &nbsp; 
                    <i className="fab fa-cc-mastercard" /> 
                  </span>
                </div>
              </div> {/* input-group.// */}
            </div> {/* form-group.// */}
            <div className="row">
              <div className="col-md flex-grow-0">
                <div className="form-group">
                  <label className="hidden-xs">Expiration</label>
                  <div className="form-inline" style={{minWidth: '220px'}}>
                    <input type="text" className="form-control"  style={{width: '100px'}}/>
                      
               
                    <span style={{width: '20px', textAlign: 'center'}}> / </span>
                    <input type="text" className="form-control"  style={{width: '100px'}}/>
                      
                  
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label data-toggle="tooltip" title="Mã 3 chữ số ở mặt sau của thẻ">CVV <i className="fa fa-question-circle" /></label>
                  <input className="form-control" required type="text" />
                </div> {/* form-group.// */}
              </div>
            </div> {/* row.// */}
            <button className="subscribe btn btn-primary btn-block" onClick={this.saveOrder} type="button"> Thanh toán  <NumberFormat value={tong} displayType={'text'} thousandSeparator={true} prefix={''} />đ</button>
          </form>
        </div> {/* card-body.// */}
      </div> {/* card .// */}
      <br /><br /> 
    </div> {/* containers .//  */}
    </div>
  </section>
  </div>
  
  {/* ========================= SECTION CONTENT END// ========================= */}
  {/* ========================= FOOTER ========================= */}
 <FooterComponent/>
</div>

        );
    }
}

export default Order;