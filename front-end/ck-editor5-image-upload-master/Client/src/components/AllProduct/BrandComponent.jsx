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
            <article className="filter-group">
            <h6 className="title">
              <a style={{textDecoration:"none"}} href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_2"> Thương hiệu </a>
            </h6>
            <div className="filter-content collapse show" id="collapse_2">
               
              <div className="inner">
              {
            this.state.brand.map(
          brands =>
          <ul className="list-menu">
          <a style={{textDecoration:"none"}} href={`/brand/${brands.id}`}><img  style={{ height: "20px",marginRight:"10px" }} src={`${process.env.PUBLIC_URL}/resources/images/brand/${brands.image}`} alt="" />{brands.title}</a>
          
        </ul>
              )}
              </div> 
            </div>
          </article> 
        );
    }
}

export default BrandComponent;