import React, { Component } from 'react'
import ProductService from '../../services/Home/ProductService';
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';
import BlogComponent from './BlogComponent';
import {total,list,quantity,add,remove,onChange,} from "cart-localstorage";

export default class ProductComponent extends Component {
  constructor(props){
    super(props)

    this.state= {
      product: [],
      brand:[]

    }
}
componentDidMount(){
ProductService.getCOProduct().then((res) =>{
this.setState({product:res.data,brand:res.data})

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
                <section className="padding-bottom">
  <header className="section-heading heading-linesss">
    <h4 className="title-section text-uppercases">Đồng hồ cơ</h4>
    <Link className="float-right text-uppercase lick"  to="product/3">Xem tất cả</Link>
  </header>
  <div className="card card-home-category">
    <div className="row no-gutters">
      <div className="col-md-3">
        
         
          <img src="resources/images/banners/DHCaocapDesk-330x428.png" className="sssss" />
       
      </div> {/* col.// */}
      <div className="slidersss">
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
    </div> {/* row.// */}
  </div> {/* card.// */}
</section>

            </div>
        )
    }
}
