import React, { Component } from 'react';

import { Link } from "react-router-dom";
import ProductService from '../../services/Home/ProductService';

class Search extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    
        this.refreshList = this.refreshList.bind(this);
     
     
        this.searchTitle = this.searchTitle.bind(this);
    
        this.state = {
     
          tutorials: [],
          currentTutorial: null,
          currentIndex: -1,
          searchTitle: ""
        };
      }
    
     
    
      onChangeSearchTitle(e) {
        const searchTitle = e.target.value;
    
        this.setState({
          searchTitle: searchTitle
        });
      }
    
     
      refreshList() {
        this.retrieveTutorials();
        this.setState({
          currentTutorial: null,
          currentIndex: -1
        });
      }
    
    
    
    
    
      searchTitle() {
       
        this.setState({
          currentTutorial: null,
          currentIndex: -1,
         
        });
    
        ProductService.findByTitle(this.state.searchTitle)
          .then(response => {
            this.setState({
              tutorials: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
      render() {
        const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;
        return (
        <div className="col-xl-15 col-lg-5 col-md-6" >
            
           

            
  <form action="#" className="search-header">
    <div className="input-group w-100">
   
    <input
                  type="text"
                  className="form-control"
                  placeholder="Bạn tìm gì..."
                  value={searchTitle}
                  onChange={this.onChangeSearchTitle}
                />
             
      <div className="input-group-append">
      <button className="nav-link"
                    className="btn btn-primary"
                    type="button"
                    
                    onClick={this.searchTitle}
                    >
                    Search
                  </button>
      </div>
    </div>
  </form> {/* search-wrap .end// */}


            <div className="searchss">
              
    
              <ul className="list-group">
                {tutorials &&
                  tutorials.map((tutorial, index) => (
                    <li
                      className={
                        "list-group-item " +
                        (index === currentIndex ? "active" : "")
                      }
                     
                      key={index}
                    >
 <img className="imagesss" src={`${process.env.PUBLIC_URL}/resources/images/product/${tutorial.image}`} alt="" />
                     <Link to={`/product/product-detail/${tutorial.id}`}> {tutorial.title}</Link>
                     
                    </li>
                  ))}
              </ul>
    
             
            </div>
            
            </div>
         
         
         
        );
    }
}

export default Search;