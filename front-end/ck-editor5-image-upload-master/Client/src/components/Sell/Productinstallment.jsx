import React, { Component } from 'react'
import FooterComponent from '../Home/FooterComponent'
import HeaderComponent from '../Home/HeaderComponent'
import ProductService from '../../services/Home/ProductService';
import NumberFormat from 'react-number-format';
import {total,list,quantity,add,remove,onChange,} from "cart-localstorage";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BrandService from '../../services/Home/BrandService';

export default class Productinstallment extends Component {
    constructor(props) {
        super(props);
        this.state = {
          content: [],
          currentPage: 1,
          size: 6,
          brand: [],
          disabled1: "",
          disabled2: "",
    
        };
    
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.findAll = this.findAll.bind(this);
        
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
        ProductService.getSellProduct(currentPage, this.state.size)
          .then((response) => response.data)
          .then((data) => {
            this.setState({
              content: data.content,
              totalPages: data.totalPages,
              totalElements: data.totalElements,
              currentPage: data.number+1 ,
            });
          });
      }
      componentDidMount() {
        this.changcurrentPage(this.state.currentPage);
        this.findAll(this.state.currentPage);
        BrandService.getBrand().then((res) =>{
            this.setState({brand:res.data})
            
            });
      }
      addCart(id,title,price,image, e) {
        if((localStorage.getItem("cart_id"))==null){
          var id_order=Math.floor(Math.random() *(99999999-Math.random()+1)+ 99999999 );
      localStorage.setItem("cart_id",id_order );
        }else{
          id_order =(localStorage.getItem("cart_id"));
        }
        add({
          id:id,title:title,price:price,image:image,id_order,
        });
        onChange();
      }
    render() {var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        step: 0.05,
        slidesToShow: 10,
        slidesToScroll: 1
      };
        return (
            <div>
  <HeaderComponent/>
  {/* ========================= SECTION CONTENT ========================= */}
  <section className="section-content padding-y">
    <div className="containers">
      {/* ============================  FILTER TOP  ================================= */}
      <div className="card mb-3">
        <div className="brand_image">
        <OwlCarousel className='owl-theme' loop margin={10} items={10 } autoplay ={true} dots={false}>
        <div><img  className="img" style={{  height:"60px", width:"120px" }} src= {`${process.env.PUBLIC_URL}/resources/images/brand/637128029630641156_Casio.jpg`}/></div>  
        <div><img  className="img" style={{height:"60px", width:"120px"  }} src= {`${process.env.PUBLIC_URL}/resources/images/brand/637129546606391498_COVER.jpg`}/></div>
        <div><img  className="img" style={{height:"60px", width:"120px"   }} src= {`${process.env.PUBLIC_URL}/resources/images/brand/637128598332919166_ORIENT-LIONMARK.jpg`}/></div>  
        <div><img  className="img" style={{height:"60px", width:"120px"  }} src= {`${process.env.PUBLIC_URL}/resources/images/brand/637128598722921951_DanielKlein.jpg`}/></div>  
        <div><img  className="img" style={{ height:"60px", width:"120px" }} src= {`${process.env.PUBLIC_URL}/resources/images/brand/637128599490512498_Bulova.jpg`}/></div>  
        <div><img  className="img" style={{ height:"60px", width:"120px" }} src= {`${process.env.PUBLIC_URL}/resources/images/brand/637128599490824854_Ferrari.jpg`}/></div>  
        <div><img  className="img" style={{ height:"60px", width:"120px"  }} src= {`${process.env.PUBLIC_URL}/resources/images/brand/637128599490512498_Citizen.jpg`}/></div>  
        <div><img  className="img" style={{ height:"60px", width:"120px"  }} src= {`${process.env.PUBLIC_URL}/resources/images/brand/637129546606401503_CANDINO.jpg`}/></div>  
        <div><img  className="img" style={{ height:"60px", width:"120px" }} src= {`${process.env.PUBLIC_URL}/resources/images/brand/637129547898348886_Lacoste.jpg`}/></div>  
        <div><img  className="img" style={{ height:"60px", width:"120px" }} src= {`${process.env.PUBLIC_URL}/resources/images/brand/637128599491606052_NAKZEN.jpg`}/></div>
</OwlCarousel>;
        </div>
      </div> {/* card.// */}
      {/* ============================ FILTER TOP END.// ================================= */}

      {/* ============================  FILTER TOP  ================================= */}
      <div className="card mb-3">
        <div className="card-body">
          <hr />
          <div className="row">
            <div className="col-md-2"><i class="fa fa-filter" aria-hidden="true"></i>B??? l???c</div> {/* col.// */}
            <div className="col-md-10"> 
              <ul className="list-inline">
                <li className="list-inline-item mr-3 dropdown"><a  style={{textDecoration:"none"}} href="#" className="dropdown-toggle" data-toggle="dropdown">?????i t?????ng s??? d???ng</a>
                  <div className="dropdown-menu p-3" style={{maxWidth: '400px'}}>	
                    <label className="form-check">
                      <input type="radio" name="myfilter" className="form-check-input" /> Name
                    </label>
                    <label className="form-check">	
                      <input type="radio" name="myfilter" className="form-check-input" /> N???
                    </label>
                  </div> {/* dropdown-menu.// */}
                </li>
                <li className="list-inline-item mr-3 dropdown">
                  <a  style={{textDecoration:"none"}} href="#" className="dropdown-toggle" data-toggle="dropdown">  Gi?? </a>
                  <div className="dropdown-menu p-3">	
                    <label className="form-check"> 	 <input type="checkbox" className="form-check-input" /> D?????i 1 tri???u </label>
                    <label className="form-check">   	 <input type="checkbox" className="form-check-input" /> T??? 1 - 3 tri???u </label>
                    <label className="form-check">    <input type="checkbox" className="form-check-input" /> T??? 3 - 10 tri???u</label>
                    <label className="form-check">  <input type="checkbox" className="form-check-input" /> Tr??n 10 tri???u  </label>
                  </div> {/* dropdown-menu.// */}
                </li>
                <li className="list-inline-item mr-3 dropdown">
                  <a  style={{textDecoration:"none"}} href="#" className="dropdown-toggle" data-toggle="dropdown">Th????ng hi???u</a>
                  <div className="dropdown-menu">
                  {
         this.state.brand.map(
          brands =>
                    <a  style={{textDecoration:"none"}} href className="dropdown-item"><img className="brandimage" src={`${process.env.PUBLIC_URL}/resources/images/brand/${brands.image}`} alt="" />{brands.title}</a>
                   )}
                  </div>
                </li>
                <li className="list-inline-item mr-3 dropdown">
                  <a  style={{textDecoration:"none"}} href="#" className="dropdown-toggle" data-toggle="dropdown">B??? m??y</a>
                  <div className="dropdown-menu">
                    <a  style={{textDecoration:"none"}} href className="dropdown-item">C?? t??? ?????ng (Automatic)</a>
                    <a  style={{textDecoration:"none"}} href className="dropdown-item">Pin (Quartz)</a>
                  </div>
                </li>
                <li className="list-inline-item mr-3 dropdown">
                  <a  style={{textDecoration:"none"}} href="#" className="dropdown-toggle" data-toggle="dropdown">Ngu???n n??ng l?????ng</a>
                  <div className="dropdown-menu">
                    <a  style={{textDecoration:"none"}} href className="dropdown-item">??nh s??ng m???t tr???i</a>
                    <a  style={{textDecoration:"none"}} href className="dropdown-item">Pin (Quartz)</a>
                  </div>
                </li>
                <li className="list-inline-item mr-3 dropdown">
                  <a  style={{textDecoration:"none"}} href="#" className="dropdown-toggle" data-toggle="dropdown">Ch???t li???u m???t k??nh</a>
                  <div className="dropdown-menu">
                    <a  style={{textDecoration:"none"}} href className="dropdown-item"> K??nh Sapphire</a>
                    <a  style={{textDecoration:"none"}} href className="dropdown-item"> K??nh kho??ng</a>
                  </div>
                </li>
                <li className="list-inline-item mr-3 dropdown">
                  <a  style={{textDecoration:"none"}} href="#" className="dropdown-toggle" data-toggle="dropdown">Ch???t li???u d??y</a>
                  <div className="dropdown-menu">
                    <a  style={{textDecoration:"none"}} href className="dropdown-item"> H???p kim</a>
                    <a  style={{textDecoration:"none"}}  href className="dropdown-item"> Da</a>
                    <a style={{textDecoration:"none"}} href className="dropdown-item"> Cao su</a>
                    <a style={{textDecoration:"none"}} href className="dropdown-item"> Silicon</a>
                    <a style={{textDecoration:"none"}} href className="dropdown-item"> V???i</a>
                    <a style={{textDecoration:"none"}} href className="dropdown-item"> Nh???a</a>
                  </div>
                </li>
                <li className="list-inline-item mr-3 dropdown">
                  <a  style={{textDecoration:"none"}} href="#" className="dropdown-toggle" data-toggle="dropdown">Ch???ng n?????c</a>
                  <div className="dropdown-menu">
                    <a style={{textDecoration:"none"}} href className="dropdown-item"> 3 ATM - R???a tay, ??i m??a</a>
                    <a style={{textDecoration:"none"}} href className="dropdown-item"> 5 ATM - ??i m??a, t???m</a>
                    <a  style={{textDecoration:"none"}} href className="dropdown-item"> 10 ATM - T???m, b??i</a>
                    <a  style={{textDecoration:"none"}} href className="dropdown-item"> 20 ATM - B??i, l???n</a>
                   
                  </div>
                </li>
                <li className="list-inline-item mr-3 dropdown">
                  <a  style={{textDecoration:"none"}} href="#" className="dropdown-toggle" data-toggle="dropdown">Lo???i m???t s???</a>
                  <div className="dropdown-menu">
                    <a  style={{textDecoration:"none"}} href className="dropdown-item"> ?????ng h??? kim</a>
                    <a  style={{textDecoration:"none"}} href className="dropdown-item"> ?????ng h??? ??i???n t???</a>
                    <a  style={{textDecoration:"none"}} href className="dropdown-item"> ?????ng h??? kim - ??i???n t???</a>
                  </div>
                </li>
              </ul>
            </div> {/* col.// */}
          </div> {/* row.// */}
        </div> {/* card-body .// */}
      </div> {/* card.// */}
      {/* ============================ FILTER TOP END.// ================================= */}
      <header className="mb-3" style={{  marginLeft:"1210px" }}>
        <div className="form-inline">
          <select className="mr-2 form-control">
            <option>Gi?? t??? th???p t???i cao</option>
            <option>Gi?? t??? cao t???i th???p</option>
            <option>B??n ch???y nh???t </option>
            <option>Xem nhi???u nh???t</option>
          </select>
        </div>
      </header>{/* sect-heading */}
      <div className="row">
          { this.state.content.map(
                products =>
               
        <div className="col-md-3s">
          <figure className="card card-product-grid">
            <div className="img-wrap"> 
              <span className="badge badge-danger"> Tr??? g??p 0% </span>
              <img src={`${process.env.PUBLIC_URL}/resources/images/product/${products.image}`} />
            </div> {/* img-wrap.// */}
            <div className="detail" style={{  marginLeft:"5px" }} >
                    <div className="info-main">
                    <a style={{textDecoration:"none"}} href={`/_${products.id}`}>
                      <h3>{products.title}</h3>
                      </a>
                      <div className="box-p">
                      Gi?? t???: <p className="price-olds black"><NumberFormat value={`${products.price}`} displayType={'text'} thousandSeparator={true} prefix={''} />??</p>
                        <span className="percent">-{products.sell}</span>
                </div>
                <strong className="price"><NumberFormat value={`${products.price_net}`} displayType={'text'} thousandSeparator={true} prefix={''} />??</strong>
                <p className="item-gift">Qu?? <b>{products.promotion}</b></p>
                <p class="item-txt-online">Online gia?? re??</p>
                     
                      <div className="item-rating">
  <p>
    <i className="icon-star" />
    <i className="icon-star" />
    <i className="icon-star" />
    <i className="icon-star-dark" />
    <i className="icon-star-dark" />
  </p>
  </div>
</div>
</div>
          </figure>
        </div> 
           


          )}
    
      </div> {/* row end.// */}
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
                         style={{textDecoration:"none"}}
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
    </div> {/* container .//  */}
 
  </section>
  <div>
  <section className="section-content padding-y">
    
  </section>
  {/* ========================= SECTION CONTENT END// ========================= */}
  {/* ========================= SECTION SUBSCRIBE  ========================= */}
 
</div>

  {/* ========================= SECTION CONTENT END// ========================= */}
  {/* ========================= SECTION SUBSCRIBE  ========================= */}
  
  {/* ========================= SECTION SUBSCRIBE END// ========================= */}
  {/* ========================= FOOTER ========================= */}
  <FooterComponent/>
</div>
        )
    }
}
