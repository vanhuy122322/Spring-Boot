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


export default class AccessoriesDetail extends Component {
    constructor(props){
        super(props)
      
        this.searchTitle = this.searchTitle.bind(this);
        this.state= {
            accessories_id: this.props.match.params.accessories_id,
          imageaccessories:[],
          accessories: [],
          category:[],
          brand:[],
        relateaccessories:[],
        relateaccessories:[],
        tutorials: [],
        currentTutorial: null,
        currentIndex: -1,
        searchTitle: ""
          
        
        }
        this.changeImage=this.changeImage.bind(this);
        
    }
    componentDidMount(){
      ProductService.getaccessoriesbyId(this.state.accessories_id).then( res =>{
        let accessories=res.data; 
        this.setState({accessories:res.data,relateimage1:accessories.relateimage1,relateimage:accessories.relateimage,image:accessories.image});
    });
    ProductService.getaccessoriesRelate(this.state.accessories_id).then( res =>{
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
    }
      
       changeImage(change){
    this.setState({image:change});
      }
      getTitle(){
        if(this.state.accessories.status == 1)
        {
            return ( <div> 
            <div className="mb-3"> 
              <var className="price h4"><NumberFormat value={`${this.state.accessories.price}`} displayType={'text'} thousandSeparator={true} prefix={''} />đ</var>  <span className="badge badge-danger"> Mới </span>
              <span className="label label--black">Trả góp 0%</span>
            </div> 
            </div>
            )
        }
        if(this.state.accessories.status == 2)
        {
          return ( <div> 
          <div> 
          <var className="price h4 accessories-pricenet"><NumberFormat value={`${this.state.accessories.price}`} displayType={'text'} thousandSeparator={true} prefix={''} />đ</var> 
          <var className="price h4"><NumberFormat value={`${this.state.accessories.price_net}`} displayType={'text'} thousandSeparator={true} prefix={''} />đ</var> <span className="box-price-percent"> -{this.state.accessories.sell} </span>
            <span className="label label--black">Trả góp 0%</span>
            
          </div> 
         
          
            

          </div>
          )
        }
        if(this.state.accessories.status == 3)
        {
          return ( <div> 
    
          <div > 
          
            <var className="price h4"><NumberFormat value={`${this.state.accessories.price}`} displayType={'text'} thousandSeparator={true} prefix={''} />đ</var> 
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

        <li className="breadcrumb-item active" aria-current="page">{this.state.accessories.title}</li>
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
              </div> {/* slider-accessories.// */}
              <div className="thumbs-wrap">
            
              <img  className="item-thumb"
                src={`${process.env.PUBLIC_URL}/resources/images/product/${this.state.relateimage}`} 
                onClick={() =>this.changeImage(this.state.relateimage)}
                />
                <img  className="item-thumb"
                src={`${process.env.PUBLIC_URL}/resources/images/product/${this.state.relateimage1}`} 
                onClick={() =>this.changeImage(this.state.relateimage1)}
                />
             
                
              </div> {/* slider-nav.// */}
            </article> {/* gallery-wrap .end// */}
          </div> {/* card.// */}
        </aside>
        <main className="col-md-5">
          <article className="accessories-info-aside">
            <h2 className="title mt-3">{this.state.accessories.title}-{this.state.accessories.gender} </h2>
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
              <dd className="col-sm-9">{this.state.accessories.discount}</dd>
              <dt className="col-sm-3">Xuất xứ:</dt>
              <dd className="col-sm-9">{this.state.accessories.origin}</dd>
            </dl>*/}
            <div className="block__promo">
  <div className="pr-top">
    <p className="pr-txtb">Khuyến mãi </p>
    <i className="pr-txt">Giá và khuyến mãi dự kiến áp dụng đến 23:59 11/07</i>
  </div>
  <div className="pr-content">
    <div className="pr-item">
      <div className="divb t1" data-promotion={730216} data-group="WebNote" data-discount={0} data-accessoriescode data-tovalue={0}>
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
        <button style={{width: '561.88px', height:"58px"}}  onClick={() => this.addCart(this.state.accessories.id,this.state.accessories.title,this.state.accessories.price,this.state.accessories.image)} class="btn-buynow jsBuy">MUA NGAY</button>
        
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

          </article> {/* accessories-info-aside .// */}
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
    <h3 className="article__content__title">Bài viết đánh giá {this.state.accessories.title}</h3>
    <a className="descriptionwwatch" >{ReactHtmlParser(this.state.accessories.description) }</a>
   
    </div>
    <div className="box-border">
    <div className="rating" id="danhgia">
  <p className="rating__title">Hãy là người đầu tiên đánh giá Dây da đồng hồ L023-06 Nâu size 20mm</p>
  <div className="selStr">
    <span>Chọn</span>
    <i className="icondetail-sltstar" onclick="showInputRating(1)" id="ss1" />
    <i className="icondetail-sltstar" onclick="showInputRating(2)" id="ss2" />
    <i className="icondetail-sltstar" onclick="showInputRating(3)" id="ss3" />
    <i className="icondetail-sltstar" onclick="showInputRating(4)" id="ss4" />
    <i className="icondetail-sltstar" onclick="showInputRating(5)" id="ss5" />
  </div>
</div>

  </div>
  

    </div>
    
             
            
            
          
        
    </div> {/* col.// */}
   
        <div className="col-md-4">
      <div className="article__content short">
          <h4 className="article__content__titles">Cấu hình đồng hồ {this.state.accessories.title}</h4>
          <table className="table table-bordered">
            <tbody>
            <tr> <td>Chất liệu dây</td><td>{this.state.accessories.wirematerial}</td> </tr>
              <tr> <td>Chất liệu dây</td><td>{this.state.accessories.wirematerial}</td> </tr>
              <tr> <td>Loại dây</td><td>{this.state.accessories.wiretype}</td> </tr>
              <tr> <td>Độ rộng dây</td><td>{this.state.accessories.wirewidth}</td> </tr>
              <tr> <td>Xuất xứ</td><td>{this.state.accessories.origin}</td> </tr>
            </tbody></table>

            
        </div> {/* col.// */}
       
      </div> {/* row.// */}
      </div>
    </div> {/* containers .//  */}
  </section>
  
          
  {/* ========================= SECTION CONTENT END// ========================= */}
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
