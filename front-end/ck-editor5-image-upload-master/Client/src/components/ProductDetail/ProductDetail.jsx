import React, { Component } from 'react'
import ProductService from '../../services/Home/ProductService'
import FooterComponent from '../Home/FooterComponent'
import HeaderComponent from '../Home/HeaderComponent'
import NumberFormat from 'react-number-format';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RelateProduct from './RelateProduct';
import {total,list,quantity,add,remove,onChange,} from "cart-localstorage";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export default class ProductDetail extends Component {
    constructor(props){
        super(props)
      
        this.searchTitle = this.searchTitle.bind(this);
        this.state= {
          id: this.props.match.params.id,
          imageproduct:[],
          product: [],
          category:[],
          brand:[],
        relateproduct:[],
        relateaccessories:[],
        tutorials: [],
        currentTutorial: null,
        currentIndex: -1,
        searchTitle: ""
          
        }
        this.changeImage=this.changeImage.bind(this);
        
    }
    componentDidMount(){
      ProductService.getProductById(this.state.id).then( res =>{
        let product=res.data; 
        this.setState({product:res.data,imageproduct:product.imageproduct,relateimage1:product.relateimage1,relateimage:product.relateimage,image:product.image,category:product.category,brand:product.brand});
    });
    ProductService.getProductRelate(this.state.id).then( res =>{
      this.setState({relateproduct:res.data});
  });
  ProductService.getaccessoriesRelate(this.state.id).then( res =>{
    this.setState({relateaccessories:res.data});
});
       } 
       searchTitle() {
       
        this.setState({
          currentTutorial: null,
          currentIndex: -1,
         
        }); 
        ProductService.getProductById(this.state.id).then( res =>{
          let tutorials=res.data; 
          this.setState({tutorials:res.data});
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
      alert("Thêm vào giỏ hàng thành công")
    }
      
       changeImage(change){
    this.setState({image:change});
      }
      getTitle(){
        if(this.state.product.status == 1)
        {
            return ( <div> 
            <div className="mb-3"> 
              <var className="price h4"><NumberFormat value={`${this.state.product.price}`} displayType={'text'} thousandSeparator={true} prefix={''} />đ</var>  <span className="badge badge-danger"> Mới </span>
              <span className="label label--black">Trả góp 0%</span>
            </div> 
            </div>
            )
        }
        if(this.state.product.status == 2)
        {
          return ( <div> 
          <div> 
          <var className="price h4 product-pricenet"><NumberFormat value={`${this.state.product.price}`} displayType={'text'} thousandSeparator={true} prefix={''} />đ</var> 
          <var className="price h4"><NumberFormat value={`${this.state.product.price_net}`} displayType={'text'} thousandSeparator={true} prefix={''} />đ</var> <span className="box-price-percent"> -{this.state.product.sell} </span>
            <span className="label label--black">Trả góp 0%</span>
            
          </div> 
         
          
            

          </div>
          )
        }
        if(this.state.product.status == 3)
        {
          return ( <div> 
    
          <div > 
          
            <var className="price h4"><NumberFormat value={`${this.state.product.price}`} displayType={'text'} thousandSeparator={true} prefix={''} />đ</var> 
            <span className="labels label--black">Trả góp 0%</span>
          </div>
          </div>
          )
        }
    }
      
       
       render() { var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        step: 0.05,
        slidesToShow: 5,
        slidesToScroll: 1
      };
      const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;
        return (
            <div>
                <div>
  <HeaderComponent/>
  <section className="py-3 bg-light">
    <div className="containers">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a  style={{textDecoration:"none"}} href="/">Trang chủ</a></li>
        <li className="breadcrumb-item"><a  style={{textDecoration:"none"}} href="#">{this.state.category.name}</a></li>
        <li className="breadcrumb-item"><a  style={{textDecoration:"none"}} href="#">{this.state.brand.title}</a></li>
        <li className="breadcrumb-item active" aria-current="page">{this.state.product.title}</li>
      </ol>
    </div>
  </section>
  {/* ========================= SECTION CONTENT ========================= */}
  <section className="section-content bg-white padding-y">
    <div className="containers">
      {/* ============================ ITEM DETAIL ======================== */}
      <div className="row">
        <aside className="col-md-7">
          <div className="card">
            <article className="gallery-wrap"> 
              <div className="img-big-wrap">
                <div> <a  style={{textDecoration:"none"}} href="#"><img src={`${process.env.PUBLIC_URL}/resources/images/product/${this.state.image}`} /></a></div>
              </div> {/* slider-product.// */}
              <div className="thumbs-wrap">
              <img  className="item-thumb"
                src={`${process.env.PUBLIC_URL}/resources/images/product/${this.state.relateimage}`} 
                onClick={() =>this.changeImage(this.state.relateimage)}
                />
                <img  className="item-thumb"
                src={`${process.env.PUBLIC_URL}/resources/images/product/${this.state.relateimage1}`} 
                onClick={() =>this.changeImage(this.state.relateimage1)}
                />
              {
               this.state.imageproduct.map(
                images =>
                <img  className="item-thumb"
                src={`${process.env.PUBLIC_URL}/resources/images/product/${images.image}`} 
                onClick={() =>this.changeImage(images.image)}
                />
               )}
                
              </div> {/* slider-nav.// */}
            </article> {/* gallery-wrap .end// */}
          </div> {/* card.// */}
        </aside>
        <main className="col-md-5">
          <article className="product-info-aside">
            <h2 className="title mt-3">{this.state.product.title}-{this.state.product.gender} </h2>
            <div className="rating-wrap my-3">
              <ul className="rating-stars">
                <li style={{width: '80%'}} className="stars-active"> 
                  <i className="fa fa-star" /> <i className="fa fa-star" /> 
                  <i className="fa fa-star" /> <i className="fa fa-star" /> 
                  <i className="fa fa-star" /> 
                </li>
                <li>
                  <i className="fa fa-star" /> <i className="fa fa-star" /> 
                  <i className="fa fa-star" /> <i className="fa fa-star" /> 
                  <i className="fa fa-star" /> 
                </li>
              </ul>
              <small className="label-rating text-muted">132 Đánh giá</small>
              <small className="label-rating text-success"> <i className="fa fa-clipboard-check" />  154 Đã bán </small>
            </div> {/* rating-wrap.// */}
         
              
            {
                                    this.getTitle()
                                }
           {/* <dl className="row">
             
              <dd className="col-sm-9"><a href="#">{this.state.brand.title}</a></dd>
              
              <dt className="col-sm-3">Bảo hành:</dt>
              <dd className="col-sm-9">1 năm</dd>
              <dt className="col-sm-3">Số lượng:</dt>
              <dd className="col-sm-9">{this.state.product.discount}</dd>
              <dt className="col-sm-3">Xuất xứ:</dt>
              <dd className="col-sm-9">{this.state.product.origin}</dd>
            </dl>*/}
            <div className="block__promo">
  <div className="pr-top">
    <p className="pr-txtb">Khuyến mãi </p>
    <i className="pr-txt">Giá và khuyến mãi dự kiến áp dụng đến 23:59 11/07</i>
  </div>
  <div className="pr-content">
    <div className="pr-item">
      <div className="divb t1" data-promotion={730216} data-group="WebNote" data-discount={0} data-productcode data-tovalue={0}>
        <span className="nb">1</span>
        <div className="divb-right">
          <p>Giảm 30% khi mua kèm (không áp dụng kèm khuyến mãi khác)</p>
        </div>
      </div>
    </div>
  </div>
</div>

           <div id="status-delivery"><div id="thoi-gian-giao-hang" className="xtoydays rslt none">
    <div className="quickdelivery ">
      <div className="deliverytime">
        <span className="con_hang">Còn hàng</span>
       
      </div>
    </div>
  </div>
</div>

            <div class="block-button normal">
        <button style={{width: '561.88px', height:"58px"}}  onClick={() => this.addCart(this.state.product.id,this.state.product.title,this.state.product.price,this.state.product.image)} class="btn-buynow jsBuy">MUA NGAY</button>
        
            <a  style={{textDecoration:"none"}} href="/tra-gop/dong-ho-thong-minh/fenix-6-day-silicone-den" class="btn-ins  ">
                MUA TRẢ GÓP 0%
                <span>Duyệt hồ sơ trong 5 phút</span>
            </a>
            <a  style={{textDecoration:"none"}} href="/tra-gop/dong-ho-thong-minh/fenix-6-day-silicone-den?m=credit" class="btn-ins ">
                TRẢ GÓP 0% QUA THẺ
                <span>Visa, Mastercard, JCB</span>
            </a>
    </div>
    <span className="callorder">Gọi đặt mua 1800.1060 (7:30 - 22:00)</span>
    <div className="promoadd" data-max={2}>
  <p className="promoadd__ttl">
    <em><b className="bonus_count">1</b> ưu đãi thêm</em>
  </p>
  <ul className="promoadd__list">
    <li className="bhx">
      <i className="icondetail-tick" />
      <div className="promo_BHX">
        <div className="l2">
          <span>
            Tặng cho khách lần đầu mua hàng online tại web <a  style={{textDecoration:"none"}} href="https://www.bachhoaxanh.com/?utm_source=tgdd_ttc_tct_20%&utm_medium=link_tct&utm_campaign=tgdd">BachhoaXANH.com</a>
          </span>
          <div className="content">
            <p className="first-pap">Mã giảm <strong>20% tối đa 100.000đ</strong></p>
            <p> 5 lần <b>FREEship</b></p>
          </div>
          <span>
            Áp dụng tại Tp.HCM và 1 số khu vực, <b>1 SĐT nhận 1 lần</b>
          </span>
          <a  style={{textDecoration:"none"}} href="https://www.bachhoaxanh.com/kinh-nghiem-hay/tang-phieu-mua-hang-bachhoaxanhcom-khi-mua-sam-tai-thegioididongcom-va-dienmayxanhcom-1276540?utm_source=tgdd_ttc_tct_the_le_20%&utm_medium=link_tct&utm_campaign=tgdd" target="_blank">(Xem chi tiết)</a>
        </div>
      </div>
    </li>
  </ul>
</div>

          </article> {/* product-info-aside .// */}
        </main> {/* col.// */}
      </div> {/* row.// */}
      {/* ================ ITEM DETAIL END .// ================= */}
    </div> {/* containers .//  */}
  </section>
  {/* ========================= SECTION CONTENT END// ========================= */}
 
  {/* ========================= SECTION  ========================= */}
  <section className="section-name padding-y">
    <div className="containers">
      <div className="row">
      <div className="col-md-8">
      
      <div className="article content-t-wrap">
  <div className="article__content short">
    <h3 className="article__content__title">Bài viết đánh giá {this.state.product.title}</h3>
    <a className="descriptionwwatch" >{ReactHtmlParser(this.state.product.description) }</a>
   
    </div>
    </div>
    
             
            
            
          
        
    </div> {/* col.// */}
   
        <div className="col-md-4">
      <div className="article__content short">
          <h4 className="article__content__titles">Cấu hình đồng hồ {this.state.product.title}</h4>
          <table className="table table-bordered">
            <tbody>
              <tr> <td>Đối tượng sử dụng</td><td>{this.state.product.gender}</td> </tr>
              <tr> <td>Thương hiệu</td><td>{this.state.brand.title}</td> </tr>
              <tr> <td>Đường kính mặt</td><td>{this.state.product.diameter}</td> </tr>
              <tr> <td>Bộ máy</td><td>{this.state.product.energysources}</td> </tr>
              <tr> <td>Độ dày mặt</td><td>{this.state.product.facethickness}</td> </tr>
              <tr> <td>Chất liệu khung viền</td><td>{this.state.product.framematerial}</td> </tr>
              <tr> <td>Chất liệu mặt kính</td><td>{this.state.product.material}</td> </tr>
              <tr> <td>Chống nước</td><td>{this.state.product.waterfroof}</td> </tr>
              <tr> <td>Chất liệu dây</td><td>{this.state.product.wirematerial}</td> </tr>
              <tr> <td>Độ rộng dây</td><td>{this.state.product.wirewidth}</td> </tr>
              <tr> <td>Xuất xứ</td><td>{this.state.product.origin}</td> </tr>
            </tbody></table>

            
        </div> {/* col.// */}
       
      </div> {/* row.// */}
      </div>
    </div> {/* containers .//  */}
  </section>
  
          
  {/* ========================= SECTION CONTENT END// ========================= */}
  <div className="containers">
        <div className="mt-4 mb-2">
        <header className="section-heading">
	<h4 class="title-section text-uppercase">Sản phẩm liên quan</h4>
 
</header>
        </div>
        <Slider {...settings}>
        {
               this.state.relateproduct.map(
                products =>
                <div>
                <div class="item-label">
                              <span class="lb-tragop">Trả góp 0%</span>
                      </div>
                   <img src={`${process.env.PUBLIC_URL}/resources/images/product/${products.image}`} alt="" />
              <div className="detail">
                               
                                {products.status==1 ? (
                        <div>
                       
                      
                          
                               
                                <a  style={{textDecoration:"none"}} href={`/_${products.id}`}>
                                <h3>{products.title}</h3>
                                </a>
                                <p class="item-txt-online">Online giá rẻ</p>
                               
                          <strong className="price"><NumberFormat value={`${products.price}`} displayType={'text'} thousandSeparator={true} prefix={''} />đ</strong>
                          <p className="item-gift">Quà <b>{products.promotion}</b></p>
                                <div class="product-pricenet">
                                 
                                </div>
                                <div class="product-price">
                                
                                </div>
                                <div className="item-rating">
            <p>
              <i className="icon-star" />
              <i className="icon-star" />
              <i className="icon-star" />
              <i className="icon-star-dark" />
              <i className="icon-star-dark" />
            </p>
            <p className="item-rating-total">12</p>
          </div>
          
          
          
          
                            </div>
                      ) :  (
                        <div></div>
                      )}
                            {products.status==2 ? (
                              <div>
                     
                     <a  style={{textDecoration:"none"}} href={`/_${products.id}`}>
                                <h3>{products.title}</h3>
                                </a>
                                <div className="box-p">
                              <p className="price-olds black"><NumberFormat value={`${products.price}`} displayType={'text'} thousandSeparator={true} prefix={''} />đ</p>
                                  <span className="percent">-{products.sell}</span>
                          </div>
                          <strong className="price"><NumberFormat value={`${products.price_net}`} displayType={'text'} thousandSeparator={true} prefix={''} />đ</strong>
                          <p className="item-gift">Quà <b>{products.promotion}</b></p>
                                <div class="product-pricenet">
                                 
                                </div>
                                <div class="product-price">
                                
                                </div>
                                <div className="item-rating">
            <p>
              <i className="icon-star" />
              <i className="icon-star" />
              <i className="icon-star" />
              <i className="icon-star-dark" />
              <i className="icon-star-dark" />
            </p>
            <p className="item-rating-total">12</p>
          </div>
          </div>
                      ) :  (
                        <div></div>
                        
                        
                      )}
                       {products.status==3 ? (
                              <div>
                       <a  style={{textDecoration:"none"}} href={`/_${products.id}`}>
                                <h3>{products.title}</h3>
                                </a>
                                <p class="item-txt-online">Online giá rẻ</p>
                          <strong className="price"><NumberFormat value={`${products.price}`} displayType={'text'} thousandSeparator={true} prefix={''} />đ</strong>
                          <p className="item-gift">Quà <b>{products.promotion}</b></p>
                                <div class="product-pricenet">
                                 
                                </div>
                                <div class="product-price">
                                
                                </div>
                                <div className="item-rating">
            <p>
              <i className="icon-star" />
              <i className="icon-star" />
              <i className="icon-star" />
              <i className="icon-star-dark" />
              <i className="icon-star-dark" />
            </p>
            <p className="item-rating-total">12</p>
          </div>
          </div>
                      ) :  (
                        <div></div>
                        
                        
                      )}
                            </div>
                            </div>
               )}
        </Slider>
      
      </div>
      <div className="containers">
        <div className=" mt-4 mb-2">
        <header className="section-heading ">
	<h4 class="title-section text-uppercase">Phụ kiện mua cùng</h4>
 
</header>
        </div>
        <Slider {...settings}>
        {
               this.state.relateaccessories.map(
                products =>
          <div>
            <div class="item-label">
                    <span class="lb-tragop">Trả góp 0%</span>
            </div>
               <img src={`${process.env.PUBLIC_URL}/resources/images/product/${products.image}`} alt="" />
          
               <div className="detail">
                
                     
                <a  style={{textDecoration:"none"}} href={`/accessories-detail/${products.id}`}>
                <h3>{products.title}</h3>
                </a>
                <p class="item-txt-online">Online giá rẻ</p>
          <strong className="price"><NumberFormat value={`${products.price_net}`} displayType={'text'} thousandSeparator={true} prefix={''} />đ</strong>
          
                <div class="product-pricenet">
                 
                </div>
                <div class="product-price">
                
                </div>
                <div className="item-rating">
<p>
<i className="icon-star" />
<i className="icon-star" />
<i className="icon-star" />
<i className="icon-star-dark" />
<i className="icon-star-dark" />
</p>
<p className="item-rating-total">12</p>
</div>




            </div>
          </div>
         
               )}
        </Slider>
        <div class="fb-comments" style={{paddingTop: '10px'}} data-href="http://localhost:3000" data-width="1000" data-numposts="5"></div>
      
      </div>
  {/* ========================= SECTION SUBSCRIBE  ========================= */}
  
  {/* ========================= SECTION SUBSCRIBE END// ========================= */}
  {/* ========================= FOOTER ========================= */}
<FooterComponent/>
</div>

            </div>
        )
    }
}
