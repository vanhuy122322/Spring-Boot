import React, { Component } from 'react';

class Limit extends Component {
    render() {
        return (
          <div >
              
          <article className="filter-group">
            <h6 className="title">
              <a style={{textDecoration:"none"}} href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1">	Chất liệu mặt kính </a>
            </h6>
            <div className="filter-content collapse show" id="collapse_1">
              <div className="inner">
            
                <ul className="list-menu">
                  <li><a href="#">Kính khoáng</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Kính nhựa</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Kinh Sapphire</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Kính tráng Sapphire</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Kính cứng</a></li>
                </ul>
           
              </div> {/* inner.// */}
            </div>
          </article> {/* filter-group  .// */}
          <article className="filter-group">
            <h6 className="title">
              <a style={{textDecoration:"none"}} href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1">	Chất liệu dây </a>
            </h6>
            <div className="filter-content collapse show" id="collapse_1">
              <div className="inner">
            
                <ul className="list-menu">
                  <li><a style={{textDecoration:"none"}} href="#">Cao Su</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Ceramic</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Thép Không Gỉ </a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Silicone</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Da </a></li>
                  <li><a  style={{textDecoration:"none"}} href="#">Hợp Kim</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Dây Lưới</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Titanium</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Nhựa</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Da bò</a></li>
                </ul>
           
              </div> {/* inner.// */}
            </div>
          </article> {/* filter-group  .// */} 
          <article className="filter-group">
            <h6 className="title">
              <a  style={{textDecoration:"none"}} href="#" className="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1">	Chất liệu vỏ </a>
            </h6>
            <div className="filter-content collapse show" id="collapse_1">
              <div className="inner">
            
                <ul className="list-menu">
                  <li><a style={{textDecoration:"none"}} href="#">Titanium</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Nhựa</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Thép không gỉ</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Ceramic</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Kimloaij</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Hợp Kim</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Thép mạ</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Hợp kim nhôm</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Silicone</a></li>
                  <li><a style={{textDecoration:"none"}} href="#">Hợp kim đồng thau</a></li>
                </ul>
           
              </div> {/* inner.// */}
            </div>
          </article> {/* filter-group  .// */} 


           
        </div>
    )
        
    }
}

export default Limit;