import React, { Component } from 'react'
import ProductService from '../../services/Home/ProductService'
import FooterComponent from '../Home/FooterComponent'
import HeaderComponent from '../Home/HeaderComponent'
import NumberFormat from 'react-number-format';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import BlogService from '../../services/Home/BlogService';
export default class Blog extends Component {
    constructor(props){
        super(props)
    
        this.state= {
          blog: [],
          blogs: [],
          blogss: [],
          blogsss: [],
          product:[]
    
        }
    }
    componentDidMount(){
    BlogService.getYearBlog().then((res) =>{
    this.setState({blog:res.data})
    
    });
    BlogService.getBlog().then((res) =>{
      this.setState({blogs:res.data})
      });
      BlogService.getAllBlog().then((res) =>{
        this.setState({blogss:res.data})
        });
        ProductService.getSaleProduct().then((res) =>{
          this.setState({product:res.data})
          
          });
          BlogService.getSell().then((res) =>{
            this.setState({blogsss:res.data})
            });
    }
      
       
       render() { 
     
     
        return (
            <div>
                <div>
  <HeaderComponent/>
  <div className="containers">
                <section className="padding-bottom">
                <header className="section-heading text-center">
	<h4 class="title-section text-uppercase">Tin tức </h4>
   
  </header>
      <div className="row">
        <div className="col1">
  <div className="col1-ct">
    <div className="blogdepteai">
  <aside className="col-md-8">
        {
         this.state.blog.map(
          products =>
          <div className="blosssss">
          <div className="card card-banner-lgss bg-dark">
            <img src={`${process.env.PUBLIC_URL}/resources/images/blog/${products.image}`} className="card-img opacity" />
          </div>
          <a  style={{textDecoration:"none"}} href={`/a${products.id}`} class="col1-title">{products.title}</a>
          <p class="news-top__item__time"><i class="fas fa-comment-alt"></i> 7266 - <time datetime="1625409554000">{products.modifieddate}</time></p>
          </div>
          )}
        </aside>
        

        <aside className="col-md-4">
          <div className="col1-simple">
          {
         this.state.blogs.map(
          product =>
          <div className="blosssss">
          <a  style={{textDecoration:"none"}}  className="spl-item">
  <div className="spl-item__img">
    <img src={`${process.env.PUBLIC_URL}/resources/images/blog/${product.image}`} className=" lazyloaded"  />
  </div>
  <div className="spl-item__content">
    <a  style={{textDecoration:"none"}} href={`/a${product.id}`} className="spl-item-title">{product.title}</a>
 
  </div>
</a>
</div>
         )}
          </div>
        </aside>
        </div>
<div className="col-3">
  <div className="news-col news-hor">
    <div className="cardsss news-section">
      <div className="card-header">
        <h2 className="card-title">Xem nhiều</h2>
        </div>
        <div className="card-bodys">
          <ul className="news-mostView">
            <li><span>1</span>
            <a  style={{textDecoration:"none"}} href="/a2">
              <h3>CHÍNH SÁCH MUA ĐỒNG HỒ TRẢ GÓP TẠI SHOPDONGHO.COM</h3>
              </a>
              </li>
              <li><span>2</span>
              <a  style={{textDecoration:"none"}} href="/a5">
                <h3>
Có nên mua đồng hồ ở Thế Giới Di Động? Nguồn gốc rõ ràng, giá bán cực tốt so với thị trường, bảo hành</h3></a></li>
                <li><span>3</span>
                <a  style={{textDecoration:"none"}} href="/a4">
                  <h3>
THAY KÍNH ĐỒNG HỒ ĐEO TAY UY TÍN GIÁ RẺ – SHOPDONGHO.COM</h3>
                  </a></li>
                  <li><span>4</span>
                  <a  style={{textDecoration:"none"}} href="/a6">
                    <h3>Chào tháng 7 đồng hồ Citizen được ưu đãi giảm kịch sàn, toàn là các model vừa sang vừa xịn, giá quá tốt</h3></a></li>
                    <li><span>5</span><a  style={{textDecoration:"none"}} href="/a3">
                      <h3>Fan 'Táo khuyết' nên biết: Loạt Apple Watch S6 đang được giảm cực nhiệt đến tiền triệu, cơ hội sắm hàng hiệu giá siêu</h3></a></li>
                      <li>
                        <span>6</span>
                        <a  style={{textDecoration:"none"}} href="/a14">
                          <h3>
ĐỒNG HỒ PIERRE LANNIER LÀ CỦA NƯỚC NÀO? XUẤT XỨ ĐỒNG</h3></a></li></ul>
                                    </div></div></div></div>
                            

       
      </div> {/* row.// */}
      </div>
      </div>
      <div className="row">
        <div className="col1">
  <div className="col1-ct">
      <div className="blogdeptrais">
         <div className="news-section">
           
             <div className="p20">
             {
         this.state.blogss.map(
          productsss =>
             <div className="news__item">
               <a  style={{textDecoration:"none"}} className="news__item__img">
                 <img className="imageblogdeptrai" src={`${process.env.PUBLIC_URL}/resources/images/blog/${productsss.image}`}  />
                 </a>
                 <div className="news-item__info">
                  
                   <a  style={{textDecoration:"none"}} href={`/a${productsss.id}`}>
                     <h3 className="news__item__tit">{productsss.title}</h3>
                     </a>
                     <div className="news__item__text"><p>{ReactHtmlParser(productsss.description) }</p></div>
                     <p className="news__item__user">
                       
                         <span><time dateTime={1625477592723}>{productsss.modifieddate}</time></span></p></div></div>
         )}
             </div>
          
           </div> {/* row.// */}
      </div>
      
      <div className="col-3" style={{ paddingTop: "20px" }}>
  <div className="news-col news-hor">
    <div className="cardssss news-section">
      <div className="card-header">
        <h2 className="card-title">Sản phẩm mới</h2>
        </div>
        <div className="card-bodys">
          <ul className="new-product">
          {
         this.state.product.map(
          productssss =>
          <li className="new-product__item">
            <a  style={{textDecoration:"none"}} className="new-product__item__img" href={`product/product-detail/${productssss.id}`}>
              <img className="blogproductimage" src={`${process.env.PUBLIC_URL}/resources/images/product/${productssss.image}`} />
              </a><div className="new-product__item__info">
                <a  style={{textDecoration:"none"}} href={`product/product-detail/${productssss.id}`}>
                  <h3 className="new-product__title">{productssss.title}</h3></a>
                  <p><a  style={{textDecoration:"none"}} className="new-product__post" href="/tin-tuc/san-pham/vivo-y53s-36669">{productssss.id} bài viết</a></p>
                  </div>
                  </li>
         )}
            </ul>
                                    </div></div></div>
                                    <div className="relateblogsell" style={{ paddingTop: "340px" }}>
      <div className="card-header">
        <h2 className="card-title">Khuyến mãi</h2>
        </div>
        <div className="card-bodys">
        <ul className="newspromotion">
        {
         this.state.blogsss.map(
          product =>
    <li>
    <a  style={{textDecoration:"none"}} href={`/a${product.id}`}>
  <img style={{ width: "262px",height:"147px" }}  src={`${process.env.PUBLIC_URL}/resources/images/blog/${product.image}`} className=" lazyloaded" />
  <h3>{product.title}</h3>
</a>
    </li>
         )}
</ul>
                                    </div></div>
                                    </div>
                                   
                                    
      </div>
         </div>
         </div>   
    </section>
            </div>
      
  
<FooterComponent/>
</div>

            </div>
        )
    }
}

