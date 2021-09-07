import React, { Component } from 'react'
import FooterComponent from '../Home/FooterComponent'
import HeaderComponent from '../Home/HeaderComponent'
import ProductService from '../../services/Home/ProductService'
import BlogService from '../../services/Home/BlogService';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';
import {total,list,quantity,add,remove,onChange,} from "cart-localstorage";
export default class BlogDetail extends Component {
    constructor(props){
        super(props)
    
        this.state= {
            id_blog: this.props.match.params.id_blog,
            blogs: [],
            product: [],
            blogsss: [],
            blogss:[],
        }
    }
    componentDidMount(){
        BlogService.getBlogbtId(this.state.id_blog).then( res =>{
            this.setState({blogs:res.data});
        });
        ProductService.getCOProduct().then((res) =>{
            this.setState({product:res.data,brand:res.data})
            
            });
            BlogService.getSell().then((res) =>{
                this.setState({blogsss:res.data})
                });
                BlogService.getBlog().then((res) =>{
                    this.setState({blogss:res.data})
                    });
    }
    render() 
     {
        { var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            step: 0.05,
            slidesToShow: 5,
            slidesToScroll: 1
          };
        }
        return (
            <div>
                <HeaderComponent/>
                <div className="containers">
                   <div className="row">
                      
                       <div className="col-9"><div className="post-wrap">
                       <ol className="breadcrumbs breadcrumb-margin">
  <li className="breadcrumb-item"><a style={{textDecoration:"none"}} style={{textDecoration:"none"}} href="/">Trang chủ</a></li>
  <li className="breadcrumb-item"><a style={{textDecoration:"none"}} style={{textDecoration:"none"}} href="/tin-tuc/">Tin tức</a></li>
  <li className="breadcrumb-item active" aria-current="page"><a style={{textDecoration:"none"}} style={{textDecoration:"none"}} href="/tin-tuc/tin-khuyen-mai">Tin khuyến mãi </a></li>
</ol>
<h1 className="post__title" data-id={134915} data-cate="tin-khuyen-mai">
{this.state.blogs.title}
</h1>
<p className="post__user margin-bottom-20 border-bottom">
  <span>{this.state.blogs.modifieddate}</span>
  <a style={{textDecoration:"none"}} style={{textDecoration:"none"}} href="#news-comment"><span>-</span> <i className="fas fa-comments" /> <span id="totalCmt">3</span>  Bình luận</a>
</p>

<div className="post__content">
<img width={912} height={450} style={{ paddingBottom: "20px" }} src={`${process.env.PUBLIC_URL}/resources/images/blog/${this.state.blogs.image}`} ></img>
</div>
<p>{ReactHtmlParser(this.state.blogs.description) }</p>
<div className="post__share border-top border-bottom margin-bottom-20">
 
  {/* Your like button code */}
  <div className="fb-like fb_iframe_widget" data-href="https://fptshop.com.vn/tin-tuc/tin-khuyen-mai/giam-den-200-000-dong-khi-thanh-toan-truc-tuyen-qua-vi-smartpay-134915" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&app_id=948243871965133&container_width=0&href=https%3A%2F%2Ffptshop.com.vn%2Ftin-tuc%2Ftin-khuyen-mai%2Fgiam-den-200-000-dong-khi-thanh-toan-truc-tuyen-qua-vi-smartpay-134915&layout=button_count&locale=vi_VN&sdk=joey&share=true&show_faces=true"><span style={{verticalAlign: 'bottom', width: '150px', height: '28px'}}><iframe name="f229c757db9e3cc" width="1000px" height="1000px" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameBorder={0} allowTransparency="true" allowFullScreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/plugins/like.php?action=like&app_id=948243871965133&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3b867f9e03f398%26domain%3Dfptshop.com.vn%26origin%3Dhttps%253A%252F%252Ffptshop.com.vn%252Ff282df8fbf2df18%26relation%3Dparent.parent&container_width=0&href=https%3A%2F%2Ffptshop.com.vn%2Ftin-tuc%2Ftin-khuyen-mai%2Fgiam-den-200-000-dong-khi-thanh-toan-truc-tuyen-qua-vi-smartpay-134915&layout=button_count&locale=vi_VN&sdk=joey&share=true&show_faces=true" style={{border: 'none', visibility: 'visible', width: '150px', height: '28px'}} className /></span></div>
</div>

                           </div></div>
                           <div className="col-3" >
                           <div className="news-col news-hor" style={{ paddingTop: "75px" }}>
   
      <div className="card-header">
      <div className="card-header">
        <h2 className="card-title">Khuyến mãi</h2>
        </div>
        <div className="card-bodys">
        <ul className="newspromotion">
        {
         this.state.blogsss.map(
          product =>
    <li>
    <a style={{textDecoration:"none"}} href={`/a${product.id}`}>
  <img width={380} height={215} src={`${process.env.PUBLIC_URL}/resources/images/blog/${product.image}`} className=" lazyloaded" />
  <h3>{product.title}</h3>
</a>
    </li>
         )}
</ul>
                                    </div></div>
                                    </div></div>
                                    <div className="containers">
        <div className="clearfix">
        <header style={{ marginBottom: "20px" }}>
	<h4 class="title-section text-uppercase">Có thể bạn sẽ thích</h4>
 
</header>
        </div>
        <Slider {...settings}>
  {
         this.state.product.map(
          products =>
    <div>
      <div class="item-label">
                    <span class="lb-tragop">Trả góp 0%</span>
            </div>
         <img src={`${process.env.PUBLIC_URL}/resources/images/product/${products.image}`} alt="" />
    <div className="detail">
                     
                      {products.status==1 ? (
              <div>
             
            
                
                     
                      <a style={{textDecoration:"none"}} href={`/_${products.id}`}>
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
           
           <a style={{textDecoration:"none"}} href={`/_${products.id}`}>
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
             <a style={{textDecoration:"none"}} href={`/_${products.id}`}>
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

         
      <div className="post-detail--bottom" style={{ paddingTop: "20px" }}><div id="post-related" className="post-related margin-bottom-30">
                               <div className="containers">
                                   <div className="card">
                                       <div className="post-related__wrapper">
                                       <div className="post-related__title margin-bottom-20">Bài viết liên quan</div>
                                       <div className="row no-gutters">
                                      
                                       {
         this.state.blogss.map(
          products => <div className="col-4">
                                           <div className="news-hor__item item-ver">
                                               <a style={{textDecoration:"none"}} href="/tin-tuc/tin-khuyen-mai/giam-20-toi-da-500-000d-thanh-toan-qua-smartpay-khi-mua-cac-san-pham-apple-watch-ipad-moi-tai-fpt-shop-127574" className="news-hor__item__img">
                                               <img width={120} height={100} style={{ paddingBottom: "20px" }} src={`${process.env.PUBLIC_URL}/resources/images/blog/${products.image}`} ></img>
                                                   </a>
                                                   <div className="news-hor__item__info">
                                                       <a style={{textDecoration:"none"}} href={`/a${products.id}`}>
                                                           <h3 className="news-hor__item__title">{products.title}</h3>
                                                          <p className="news__item__user">
                       <span><time dateTime={1625477592723}>{products.modifieddate}</time></span></p>
                                                        
                                                           </a></div></div>
                                                            </div>   )}</div>

                                     

                                       </div>

                                      
                                   </div>
                               </div>
                               </div></div>
                               <div class="fb-comments" style={{paddingTop: '10px'}} data-href="http://localhost:3000" data-width="1000" data-numposts="5"></div>
                   </div>
                
                </div>
                
                <FooterComponent/>
            </div>
        )
    }
}
