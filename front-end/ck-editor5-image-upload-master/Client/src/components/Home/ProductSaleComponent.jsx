import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import ProductService from '../../services/Home/ProductService';
import NumberFormat from 'react-number-format';
import {total,list,quantity,add,remove,onChange,} from "cart-localstorage";

export default class ProductSaleComponent extends Component {
  constructor(props){
    super(props)

    this.state= {
      product: []

    }
}
componentDidMount(){
  ProductService.getSaleProduct().then((res) =>{
   this.setState({product:res.data})
   
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
render() { var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  step: 0.05,
  slidesToShow: 4,
  slidesToScroll: 1
};
return (
  <div className="containers">
  <div className="clearfix mt-4 mb-2">
  <header className="section-heading heading-lines">
	<h4 class="title-section text-uppercase">Khuyến mãi hot</h4>
  
</header>
  </div>
  <div className="row">
  <div className="col-heading content-body">
<header className="section-heading">
<h3 className="section-title">Ưu đãi</h3>

</header>{/* sect-heading */}
<div className="timer">
<div> <span className="num">04</span> <small>Ngày</small></div>
<div> <span className="num">12</span> <small>Giờ</small></div>
<div> <span className="num">58</span> <small>Giây</small></div>
</div>
</div>
<div className="sliderss">
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
    </div>
   
         )}
  </Slider>
  </div>
</div>
</div>
  )
}
}
