import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent';
import SliderComponent from './SliderComponent';
import ProductComponent from './ProductComponent';
import FooterComponent from './FooterComponent';
import ProductSaleComponent from './ProductSaleComponent';
import ProductNewComponent from './ProductNewComponent';
import AppoWatch from './AppoWatch';
import TradeComponent from './TradeComponent';
import BannerComponent from './BannerComponent';
import ContactComponent from './ContactComponent';
import BlogComponent from './BlogComponent';
import PinWatch from './PinWatch';
import Accessories from './Accessories';


export default class Home extends Component {
  render() {
    return (
      <div>
         <HeaderComponent/>
      <SliderComponent/>
      <ProductSaleComponent/>
      <AppoWatch/>
      <ProductComponent/>
      <PinWatch/>
      <ProductNewComponent/>
      
     
     <Accessories/>
     <BlogComponent/>
      <TradeComponent/>
     
      <ContactComponent/>
      <FooterComponent/>
    
      </div>
    )
  }
}
