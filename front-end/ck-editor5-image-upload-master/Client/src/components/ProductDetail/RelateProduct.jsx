import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import ProductService from '../../services/Home/ProductService';
import NumberFormat from 'react-number-format';
class RelateProduct extends Component {
    constructor(props){
        super(props)
    
        this.state= {
          relateproduct:[]
    
        }
    }
    componentDidMount(){
      ProductService.getProductRelate(this.state.id).then( res =>{
        this.setState({relateproduct:res.data});
    });
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
        <header className="section-heading heading-line">
	<h4 class="title-section text-uppercase">Sản phẩm liên quan</h4>
 
</header>
        </div>
        <Slider {...settings}>
        {
               this.state.relateproduct.map(
                relates =>
          <div>
               <img src={`${process.env.PUBLIC_URL}/resources/images/product/${relates.image}`} alt="" />
          
          <div className="detail">
                            <div class="catagory-name">{relates.gender}</div>
                            <span className="badge badge-danger"> Mới </span>
                            
                            <Link to={`product/product-detail/${relates.id}`} className="nav-link">
                            <h5 className="text">{relates.title}</h5>
                  </Link>
                                
                            
                            <div class="product-price">
                            <NumberFormat value={`${relates.price}`} displayType={'text'} thousandSeparator={true} prefix={''} />đ
                            </div>
                        </div>
          </div>
         
               )}
        </Slider>
   
      </div>
        );
    }
}

export default RelateProduct;