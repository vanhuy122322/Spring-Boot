import React, { Component } from 'react'
import SliderService from '../../services/Home/SliderService';
import { Carousel } from 'react-bootstrap';
import BrandComponent from './BrandComponent';
import CategoryComponent from './CategoryComponent';

export default class SliderComponent extends Component {
  constructor(props){
    super(props)

    this.state= {
      slider: []

    }
}
componentDidMount(){
SliderService.getSlider().then((res) =>{
this.setState({slider:res.data})

});
}
    render() {
        return (
          <div className="containers">
          {/* ========================= SECTION MAIN  ========================= */}
          <section className="section-main padding-y">
            <main className="card">
              <div className="card-body">
                <div className="row">
                  <BrandComponent/>
                  <div className="slider">
                    {/* ================== COMPONENT SLIDER  BOOTSTRAP  ==================  */}
                    <Carousel fade={true}>
            {
               this.state.slider.map(
                sliders =>
<Carousel.Item interval={1000}>
<img
className="d-block w-100"
src={`${process.env.PUBLIC_URL}/resources/images/slider/${sliders.image}`}
alt="First slide"
/>

</Carousel.Item>
               )
}
</Carousel>
                    {/* ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// */}	
                  </div> {/* col.// */}
                  
                </div> {/* row.// */}
              </div> {/* card-body.// */}
            </main> {/* card.// */}
          </section>
        </div>
        
        )
    }
}
