import React, { Component } from 'react'
import CategoryService from '../../services/Home/CategoryService';
import BrandComponent from './BrandComponent';



export default class CategoryComponent extends Component {
    constructor(props){
        super(props)
    
        this.state= {
         
          category: [],
          brand:[]
    
        }
    }
    componentDidMount(){
        CategoryService.getCategory().then((res) =>{
        this.setState({category:res.data})
        
        });}
    render() {
        return (
            <div >
              
              <article className="filter-group">
                <h6 className="title">
                  <a style={{textDecoration:"none"}} href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1">	 Loại sản phẩm </a>
                </h6>
                <div className="filter-content collapse show" id="collapse_1">
                  <div className="inner">
                  {
               this.state.category.map(
                categorys =>
                    <ul className="list-menu">
                      <li><a style={{textDecoration:"none"}} href={`/product/${categorys.id}`}>{categorys.name}</a></li>
                      
                    </ul>
               )}
                  </div> {/* inner.// */}
                </div>
              </article> {/* filter-group  .// */}
           
           
            
            </div>
        )
    }
}
