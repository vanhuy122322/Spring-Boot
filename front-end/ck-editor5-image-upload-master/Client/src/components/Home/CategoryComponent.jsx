import React, { Component } from 'react';
import CategoryService from '../../services/Home/CategoryService';

class CategoryComponent extends Component {
    constructor(props){
        super(props)
    
        this.state= {
         
          category: []
    
        }
    }
    componentDidMount(){
        CategoryService.getCategory().then((res) =>{
        this.setState({category:res.data})
        
        });}
    render() {
        return (
            <div className="col-md d-none d-lg-block flex-grow-1">
                    <aside className="special-home-right">
                      <h6 className="bg-blue text-center text-white mb-0 p-2">Danh mục phổ biến</h6>
                      {
               this.state.category.map(
                categorys =>
                      <div className="card-banner border-bottom">
                        <div className="py-3" style={{width: '80%'}}>
                          <a  style={{textDecoration:"none"}} href={`/product/${categorys.id}`} className="card-title">{categorys.name}</a>
                         
                        </div> 
                        <img src={`${process.env.PUBLIC_URL}/resources/images/category/${categorys.image}`} height={80} className="img-bg" />
                      </div>
               )}
                    </aside>
                  </div> 
        );
    }
}

export default CategoryComponent;