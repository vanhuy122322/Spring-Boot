import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import ProductService from '../../services/Home/ProductService';
import NumberFormat from 'react-number-format';
import {total,list,quantity,add,remove,onChange,} from "cart-localstorage";

export default class ProductNewComponent extends Component {
    constructor(props){
        super(props)
    
        this.state= {
          product: []
    
        }
    }
    componentDidMount(){
   ProductService.getNewProduct().then((res) =>{
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
        slidesToShow: 5,
        slidesToScroll: 1
      };
      return (
        <div className="containers">
        <div className="clearfix mt-4 mb-2">
        <header className="section-heading heading-liness">
	<h4 class="title-section text-uppercase">Đồng hồ mới nhất</h4>
 
</header>
        </div>
        <Slider {...settings}>
        {
               this.state.product.map(
                products =>
          <div>
            <div class="item-label">
                    <span class="lb-tragops">Mới</span>
            </div>
               <img src={`${process.env.PUBLIC_URL}/resources/images/product/${products.image}`} alt="" />
          
               <div className="detail">
                
                     
                <a style={{textDecoration:"none"}} href={`/_${products.id}`}>
                <h3>{products.title}</h3>
                </a>
                <p class="item-txt-online">Online giá rẻ</p>
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
        )
    }
}
