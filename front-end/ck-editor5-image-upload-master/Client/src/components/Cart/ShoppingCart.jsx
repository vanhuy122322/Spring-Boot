import React, { Component } from 'react';
import {total,list,quantity,add,remove,onChange,} from "cart-localstorage";
import NumberFormat from "react-number-format";
import FooterComponent from '../Home/FooterComponent'
import HeaderComponent from '../Home/HeaderComponent'
import AuthService from "../../services/User/auth.service";
const tong = total();
const user = AuthService.getCurrentUser();
class ShoppingCart extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          carts: list(),
        };
        this.payCheack=this.payCheack.bind(this);
        
      }
      AddCart(id, title, price, image, e) {
        add({ id: id, title: title, price: price, image: image });
        onChange();
      }
      DeleteAddCart(id) {
        quantity(id, -1);
      }
      RemoveAddCart(id) {
        remove(id);
      }
     
      payCheack(){
    if (user==null) {
     
      this.props.history.push("/login");
     }
     else {
      this.props.history.push("/pay");
     }
     
    
  }
      
      render() {
        return (
          <div>
              <HeaderComponent/>
            <section className="section-content padding-y">
              <div className="containers">
                <div className="row">
                  <main className="col-md-9">
                    <div className="card">
                      <table className="table table-border table-shopping-cart">
                        <thead className="text-muted">
                          <tr className="small text-uppercase">
                          
                            <th scope="col">Hình ảnh</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col" colspan="2">
                              Thay đổi
                            </th>
                            <th scope="col">Đơn giá</th>
                            <th scope="col">Thành tiền</th>
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
                                    <a style={{textDecoration:"none"}} className="title text-dark">{cat.title}</a>
                                  </figcaption>
                                </figure>
                              </td>
    
                              <td>{cat.quantity}</td>
                              <td style={{ width: "30px" }}>
                                <a
                                style={{textDecoration:"none"}}
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
                                  +
                                </a>
                              </td>
    
                              <td style={{ width: "30px" }}>
                                <a
                                style={{textDecoration:"none"}}
                                  href=""
                                  onClick={(e) => this.DeleteAddCart(cat.id)}
                                >
                                  -
                                </a>
                              </td>
                              <td>
                                <div className="price-wrap">
                                  <var className="price">
                                    <NumberFormat
                                      value={cat.price}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                    />
                                    đ
                                  </var>
                                </div>{" "}
                                {/* price-wrap .// */}
                              </td>
                              <td>
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
                                {/* price-wrap .// */}
                              </td>
                              <td className="text-right">
                                {/* <a data-original-title="Save to Wishlist" title href className="btn btn-light" data-toggle="tooltip"> <i className="fa fa-heart" /></a>  */}
                                <a
                                style={{textDecoration:"none"}}
                                  href=""
                                  className="btn btn-light"
                                  onClick={(e) => this.RemoveAddCart(cat.id)}
                                >
                                  {" "}
                                  Xóa
                                </a>
                                
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="card-body border-top">
                        <button onClick={this.payCheack} className="btn btn-primary float-md-right">
                          {" "}
                         Thanh toán <i className="fa fa-chevron-right" />{" "}
                        </button>
                        <button href="http://localhost:3000" className="btn btn-light">
                          {" "}
                          <i className="fa fa-chevron-left" /> Tiếp tục mua sắm{" "}
                        </button>
                      </div>
                    </div>{" "}
                    {/* card.// */}
                    <div className="alert alert-success mt-3">
                      <p className="icontext">
                        <i className="icon text-success fa fa-truck" /> Miễn phí vẫn
                        chuyển
                      </p>
                    </div>
                  </main>{" "}
                  {/* col.// */}
                  <aside className="col-md-3">
                   
                    {/* card .// */}
                    <div className="card">
                      <div className="card-body">
                        <dl className="dlist-align">
                          <dt>Tổng giá trị:</dt>
                          <dd className="text-right">
                            <NumberFormat
                              value={tong}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                            đ
                          </dd>
                        </dl>
                       
                        <dl className="dlist-align">
                          <dt>Tổng:</dt>
                          <dd className="text-right  h5">
                            <strong>
                              <NumberFormat
                                value={tong}
                                displayType={"text"}
                                thousandSeparator={true}
                              />
                              đ
                            </strong>
                          </dd>
                        </dl>
                        <hr />
                        <p className="text-center mb-3">
                          <img
                            src="resources/images/misc/payments.png"
                            height={26}
                          />
                        </p>
                      </div>{" "}
                      {/* card-body.// */}
                    </div>{" "}
                    {/* card .// */}
                  </aside>{" "}
                  {/* col.// */}
                </div>
              </div>{" "}
              {/* containers .//  */}
            </section>
            <FooterComponent/>
          </div>
        );
    }
}

export default ShoppingCart;