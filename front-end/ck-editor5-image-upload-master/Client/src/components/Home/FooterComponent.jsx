import React, { Component } from 'react'
import BrandService from '../../services/Home/BrandService';
export default class FooterComponent extends Component {
  constructor(props){
    super(props)

    this.state= {
       
      policy: [],
     
    }
}
componentDidMount(){
    BrandService.getPolicy().then((res) =>{
this.setState({policy:res.data})

});

}
    render() {
        return (
            <div>
                <footer className="section-footer footerss  text-black">
    <div className="containers">
      <section className="footer-top  padding-y-lg">
        <div className="row">
          <aside className="col-md-4 col-12">
            <article className="mr-md-4">
              <h5 className="title">Liên hệ</h5>
            
              <ul className="list-icon">
                <li> <i className="icon fa fa-map-marker"> </i>245 Dương Đình Hội ,Tăng Nhơn Phú B </li>
                <li> <i className="icon fa fa-envelope"> </i> shopdongho@gmai.com</li>
                <li> <i className="icon fa fa-phone"> </i>0947158099</li>
                <li> <i className="icon fa fa-clock"> </i>Mở cửa 10:00am - 7:00pm</li>
              </ul>
            </article>
          </aside>
          <aside className="col-md col-6">
            <h5 className="title">Chính sách</h5>
            <ul className="list-unstyled">
            {
         this.state.policy.map(
          products =>
              <li> <a  style={{textDecoration:"none"}}  href={`/chinh-sach/${products.id}`}>{products.name}</a></li>
         )}
            </ul>
          </aside>
          <aside className="col-md col-6">
            <h5 className="title">Tài khoản của tôi</h5>
            <ul className="list-unstyled">
              <li> <a  style={{textDecoration:"none"}} href="#">Tình trạng đặt hàng</a></li>
              <li> <a  style={{textDecoration:"none"}} href="#">Thông tin vận chuyển</a></li>
              
            </ul>
          </aside>
          <aside className="col-md-4 col-12">
            <h5 className="title">Tin tức</h5>
           
            <form className="form-inline mb-3">
              <input type="text" placeholder="Email" className="border-0 w-auto form-control" name />
              <button className="btn ml-2 btn-warning"> Theo dõi</button>
            </form>
           
            <div>
              <a  style={{textDecoration:"none"}} href="#" className="btn btn-icon btn-outline-light"><i className="fab fa-facebook-f" /></a>
              <a  style={{textDecoration:"none"}} href="#" className="btn btn-icon btn-outline-light"><i className="fab fa-twitter" /></a>
              <a  style={{textDecoration:"none"}} href="#" className="btn btn-icon btn-outline-light"><i className="fab fa-instagram" /></a>
              <a  style={{textDecoration:"none"}} href="#" className="btn btn-icon btn-outline-light"><i className="fab fa-youtube" /></a>
            </div>
          </aside>
        </div> {/* row.// */}
      </section>	{/* footer-top.// */}
      
    </div>{/* //containers */}
  </footer>
            </div>
        )
    }
}
