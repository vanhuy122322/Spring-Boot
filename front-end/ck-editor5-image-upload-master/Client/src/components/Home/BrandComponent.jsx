import React, { Component } from 'react';
import BrandService from '../../services/Home/BrandService';

class BrandComponent extends Component {
  constructor(props){
    super(props)

    this.state= {
      brand: []

    }
}
componentDidMount(){
BrandService.getBrand().then((res) =>{
this.setState({brand:res.data})

});
}
    render() {
        return (
            <div>
              <aside className="col-lg col-md-3 flex-lg-grow-0">
            <nav className="nav-home-aside">
              <h6 className="title-category">Thương hiệu <i className="d-md-none icon fa fa-chevron-down" /></h6>
              <ul className="menu-category">
              {
         this.state.brand.map(
          brands =>
                <li>
                  
                  <a  style={{textDecoration:"none"}} href={`/brand/${brands.id}`}><img className="brandimage" src={`${process.env.PUBLIC_URL}/resources/images/brand/${brands.image}`} alt="" />{brands.title}  </a>
                  </li>
         )}
              </ul>
            </nav>
          </aside> {/* col.// */}  
            </div>
        );
    }
}

export default BrandComponent;