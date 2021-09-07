import React, { Component } from 'react'
import FooterComponent from '../Home/FooterComponent'
import HeaderComponent from '../Home/HeaderComponent'
import BrandComponent from './BrandComponent'
import CategoryComponent from './CategoryComponent'
import Limit from './Limit'
import ListProduct from './ListProduct'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class AllProduct extends Component {
    render() { var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      step: 0.05,
      slidesToShow: 10,
      slidesToScroll: 1
    };
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
    <ListProduct/>
    </div>
    </div> {/* containers .//  */}
  </section>
  {/* ========================= SECTION CONTENT END// ========================= */}
  {/* ========================= SECTION SUBSCRIBE  ========================= */}
  
  {/* ========================= SECTION SUBSCRIBE END// ========================= */}
  {/* ========================= FOOTER ========================= */}
  <FooterComponent/>
</div>

        )
    }
}
