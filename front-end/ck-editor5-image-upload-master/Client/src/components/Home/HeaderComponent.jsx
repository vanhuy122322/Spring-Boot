import React, { Component } from 'react'
import MenuService from '../../services/Home/MenuService';
import Search from './Search';
import { Switch, Route, Link } from "react-router-dom";
import AuthService from "../../services/User/auth.service";
import BrandService from '../../services/Home/BrandService';


export default class HeaderComponent extends Component {
  constructor(props){
    super(props)
    this.logOut = this.logOut.bind(this);

    this.state= {
      menu: [],
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
     brand:[],

    

    }
   
}
componentDidMount(){
MenuService.getMenu().then((res) =>{
this.setState({menu:res.data})

});
BrandService.getBrand().then((res) =>{
  this.setState({brand:res.data})
  
  });

const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
}  
logOut() {
  AuthService.logout();
}


  



  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
        return (
            <div>
  <header className="section-header">
    <nav className="navbar d-none d-md-flex p-md-0 navbar-expand-sm navbar-light border-bottom">
      <div className="containers">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTop4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTop4">
          <ul className="navbar-nav mr-auto">
            
            <li><a href="#" className="nav-link"> Email:shopdongho@gmail.com </a></li>
            <li><a href="#" className="nav-link"> Liên hệ:0947158099 </a></li>
            <li><a href="#" className="nav-link"> Hỗ trợ khách hàng </a></li>
            
          </ul>
          
          
            {currentUser ? (
              <ul className="navbar-nav">
              <li><a href="#" className="nav-link"> Giao hàng tận nơi </a></li>
            <li><a href="/profile" className="nav-link"> {currentUser.username} </a></li>
            <li><a href="/" className="nav-link"  onClick={this.logOut}>Đăng xuất</a></li> 
            </ul>
            ) : (
              <ul className="navbar-nav">
              <li><a href="#" className="nav-link"> Giao hàng tận nơi </a></li>
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Đăng nhập
                  </Link>
                </li>
  
                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                   Đăng ký
                  </Link>
                </li>
              </ul>
            )}
          
           
           {/* list-inline //  */}
        </div> {/* navbar-collapse .// */}
      </div> {/* containers //  */}
    </nav>
    <div className="containers">
    <div className="row align-items-center">
  <div className="col-xl-2 col-lg-3 col-md-12">
    <a href="/" className="brand-wrap">
      <img className="logo" src={`${process.env.PUBLIC_URL}/resources/images/logo1.png`} /><span className="sss">ShopĐồngHồ</span>
    </a> {/* brand-wrap.// */}
  </div>
 <Search/>
  <div className="col-xl-4 col-lg-4 col-md-6">
    <div className="widgets-wrap float-md-right">
      <div className="widget-header mr-3">
      {currentUser ? (  
        <div>
           {currentUser.id==5 ? (  
        <div>
   <a href="/dashboard" className="widget-view" style={{textDecoration:"none"}}>
          <div className="areass">
            <i className="fa fa-user" />
         
          </div>
          <a href="/dashboard" className="text" style={{textDecoration:"none"}}> Quản trị</a>
        </a>
         <a href={`/don-dat-hang/${currentUser.id}`} className="widget-view" style={{textDecoration:"none"}}>
         <div className="areass">
           <i className="fa fa-store" />
         </div>
         <small className="text" style={{textDecoration:"none"}}> Đơn hàng </small>
       </a>
       <a href="#" className="widget-view" style={{textDecoration:"none"}}>
          <div className="areass">
          <i className="fa fa-bell" />
          </div>
          <small className="text" style={{textDecoration:"none"}}> Thông báo </small>
        </a>
        <a href="/cart" className="widget-view" style={{textDecoration:"none"}}>
          <div className="areass">
            <i className="fa fa-shopping-cart" />
          </div>
          <small className="text" style={{textDecoration:"none"}}> Giỏ hàng </small>
        </a>
       </div>
      ):(
        <div>  
          <a href="/thong-tin" className="widget-view" style={{textDecoration:"none"}}>
          <div className="areass">
            <i className="fa fa-user" />
          </div>
          <a href="/thong-tin" className="text" style={{textDecoration:"none"}}> Thông tin khách hàng </a>
        </a>
         <a href={`/don-dat-hang/${currentUser.id}`} className="widget-view" style={{textDecoration:"none"}}>
         <div className="areass">
           <i className="fa fa-store" />
         </div>
         <small className="text" style={{textDecoration:"none"}}> Đơn hàng </small>
       </a>
       <a href="#" className="widget-view" style={{textDecoration:"none"}}>
          <div className="areass">
          <i className="fa fa-bell" />
          </div>
          <small className="text" style={{textDecoration:"none"}}> Thông báo </small>
        </a>
        <a href="/cart" className="widget-view" style={{textDecoration:"none"}}>
          <div className="areass">
            <i className="fa fa-shopping-cart" />
          </div>
          <small className="text" style={{textDecoration:"none"}}> Giỏ hàng </small>
        </a>
        </div>
      )
  }
       </div>
      ):(
        <div>
        <a href="/login" className="widget-view" style={{textDecoration:"none"}}>
          <div className="areass">
            <i className="fa fa-user" />
            
          </div>
          <a href="/" className="text" style={{textDecoration:"none"}}> Thông tin khách hàng </a>
        </a>
        <a href="#" className="widget-view" style={{textDecoration:"none"}}>
         <div className="areass">
           <i className="fa fa-store" />
         </div>
         <small className="text" style={{textDecoration:"none"}}> Đơn hàng </small>
       </a>
       <a href="#" className="widget-view" style={{textDecoration:"none"}}>
          <div className="areass">
          <i className="fa fa-bell" />
          </div>
          <small className="text" style={{textDecoration:"none"}}> Thông báo </small>
        </a>
        <a href="/cart" className="widget-view" style={{textDecoration:"none"}}>
          <div className="areass">
            <i className="fa fa-shopping-cart" />
          </div>
          <small className="text" style={{textDecoration:"none"}}>  Giỏ hàng </small>
        </a>
       
        </div>
      )
  }






      </div>
    
    </div> {/* widgets-wrap.// */}
  </div> {/* col.// */}
</div>

    </div> {/* containers.// */}
    
    <div>
    <div className="menussss">
      <nav className="navbar navbar-main navbar-expand pl-0">
       <div className="containers">
        <div className="containerssss">
        <ul className="navbar-nav flex-wrap">
        {
            this.state.menu.map(
              menus =>
          <li className="nav-item dropdown ">
     
              
            
                <div className="dropdown-menu ffff">        
                    <div className="col-6">
                    </div>      
                </div>            
            {menus.id==1 ? (
               <a className="nav-link data-toggle  " style={{ borderLeft:"1px solid #eee" }}   href={menus.rowguid}><i class="fas fa-home" style={{ marginRight: "10px" }}></i>{menus.name}</a>
            ):(
              <div></div>
            )}
            {menus.id==2 ? (
               <a className="nav-link data-toggle " style={{ borderLeft:"1px solid #eee" }}    href={menus.rowguid}><i class="icon-dhthoitrang" style={{ marginRight: "10px" }}></i>{menus.name}</a>
            ):(
              <div></div>
            )}
            {menus.id==6 ? (
               <a className="nav-link data-toggle " style={{ borderLeft:"1px solid #eee" }}    href={menus.rowguid}><i class="fas fa-question" style={{ marginRight: "10px" }} ></i>{menus.name}</a>
            ):(
              <div></div>
            )}
            {menus.id==7 ? (
               <a className="nav-link data-toggle " style={{ borderLeft:"1px solid #eee" }}    href={menus.rowguid}><i class="fas fa-piggy-bank" style={{ marginRight: "10px" }}></i>{menus.name}</a>
            ):(
              <div></div>
            )}
            {menus.id==8 ? (
               <a className="nav-link data-toggle " style={{ borderLeft:"1px solid #eee" }}    href={menus.rowguid}><i class="fas fa-newspaper" style={{ marginRight: "10px" }}></i>{menus.name}</a>
            ):(
              <div></div>
            )}
            {menus.id==9 ? (
               <a className="nav-link data-toggle " style={{  borderLeft:"1px solid #eee",borderRight:"1px solid #eee" }}    href={menus.rowguid}><i class="fas fa-percent" style={{ marginRight: "10px" }}></i>{menus.name}</a>
            ):(
              <div></div>
            )}
           
          </li>
            )
            }
        </ul>
        </div>
        </div>
      </nav> {/* navbar-main  .// */}
      </div>
      </div>
      
  </header> {/* section-header.// */}
  {/* ========================= SECTION MAIN  ========================= */}
  
  {/* ========================= SECTION MAIN END// ========================= */}
 
  {/* containers end.// */}
  {/* ========================= FOOTER ========================= */}
  
</div>

        )
    }
}
