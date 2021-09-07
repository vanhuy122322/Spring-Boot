import React, { Component } from 'react';
import ProductService from '../../services/Home/ProductService'
import FooterComponent from '../Home/FooterComponent'
import HeaderComponent from '../Home/HeaderComponent'
import NumberFormat from 'react-number-format';
import CategoryComponent from './CategoryComponent'
import BrandComponent from './BrandComponent';
import Limit from './Limit'
import {total,list,quantity,add,remove,onChange,} from "cart-localstorage";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class PageBrand extends Component {
  constructor(props){
    super(props)

    this.state= {
        category_id: this.props.match.params.category_id,
        category:[],
        brand_id:this.props.match.params.brand_id,
        content: [],
        currentPage: 1,
        size: 6,
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
      ProductService.getProductBrand(this.state.brand_id,currentPage, this.state.size)
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
  render() {
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
    <div >
    <aside className="col-md-2 float-left">
     <CategoryComponent/>
     <BrandComponent/>
     <Limit/>
     </aside>
      
         <div className="row">
            <main className="productcategory">
              <header className="mb-3">
                <div className="form-inline">
                 
                  <select className="mr-2 form-control">
                    <option>Sản phẩm mới</option>
                    <option>Sản phẩm khuyến mãi</option>
                  
                  </select>
                </div>
                  </header>{/* sect-heading */}
                  {
                   this.state.content.map(
                    products =>
                    <article className="card card-product-list">
                    <div className="row no-gutters">
                      <aside className="col-md-3">
                        
                        <a style={{textDecoration:"none"}} href="#" className="img-wrap">
                        {products.status==1 ? (
                  <span className="badge badge-danger"> Mới </span>
                ) :  (
                  <div></div>
                )}
                      {products.status==2 ? (
                  <span className="badge badge-danger"> 20% </span>
                ) :  (
                  <div></div>
                  
                  
                )}
                          <img src={`${process.env.PUBLIC_URL}/resources/images/product/${products.image}`} />
                        </a>
                      </aside> {/* col.// */}
                      <div className="col-md-6">
                        <div className="detail">
                        <div className="info-main">
                        <a style={{textDecoration:"none"}} href={`/_${products.id}`}>
                          <h3>{products.title}</h3>
                          </a>
                          <div className="box-p">
                        <p className="price-olds black"><NumberFormat value={`${products.price}`} displayType={'text'} thousandSeparator={true} prefix={''} />đ</p>
                            <span className="percent">-{products.sell}</span>
                    </div>
                    <strong className="price"><NumberFormat value={`${products.price_net}`} displayType={'text'} thousandSeparator={true} prefix={''} />đ</strong>
                    <p className="item-gift">Quà <b>{products.promotion}</b></p>
                    <p class="item-txt-online">Online giá rẻ</p>
                         
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
                      </div> {/* col.// */}
                      
                      <aside className="col-sm-3">
      <div className="info-aside">
        <small className="text-warning">Giao hàng tận nơi</small>
        <p className="text-muted mt-3">Sản phẩm chính hãng</p>
        <p className="mt-3">
        
          <a style={{textDecoration:"none"}} href="#" className="btn btn-light"><i className="fa fa-heart" /> Yêu thích </a>
        </p>
        <a style={{textDecoration:"none"}} href="#" className="btn  btn-primarys"> 
      <i  onClick={() => this.addCart(products.id,products.title,products.price,products.image)} className="fas fa-shopping-cart" /> <span     onClick={() => this.addCart(products.id,products.title,products.price,products.image)} className="text">Thêm vào giỏ hàng</span> 
    </a>
      </div> {/* info-aside.// */}
    </aside> {/* col.// */}
    
                    </div> {/* row.// */}
                  </article> )}
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
                        <a style={{textDecoration:"none"}}
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
                </main> {/* col.// */}
              </div>
        </div>
        </div> {/* containers .//  */}
      </section>
      {/* ========================= SECTION CONTENT END// ========================= */}
      {/* ========================= SECTION SUBSCRIBE  ========================= */}
     
      {/* ========================= SECTION SUBSCRIBE END// ========================= */}
      {/* ========================= FOOTER ========================= */}
      <FooterComponent/>
    </div>
    );
  }
}

export default PageBrand;