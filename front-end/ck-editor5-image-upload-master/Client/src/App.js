import React, { components } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import AdminNewCategory from './components/Admin/Table/Category/AdminNewCategory';
import Home from './components/Home/Home';
import AllProduct from './components/AllProduct/AllProduct';
import ProductDetail from './components/ProductDetail/ProductDetail';
import PageProduct from './components/AllProduct/PageProduct';
import AllSearch from './components/SearchAll/AllSearch';
import Register from './components/User/Register';
import Login from './components/User/Login';
import ShoppingCart from './components/Cart/ShoppingCart';
import Checkout from './components/Cart/Checkout';
import Main from './components/Information/Main';
import Address from './components/Information/Address';
import Order from './components/Information/Order';
import Setting from './components/Information/Setting';
import PageBrand from './components/AllProduct/PageBrand';

import Content from './components/Content/Content';
import Trade from './components/Trade/Trade';

import OrderDetail from './components/Information/OrderDetail';
import Dashboard from './components/Admin/Dashboard';
import AdminProduct from './components/Admin/Table/Product/AdminProduct';
import AdminBrand from './components/Admin/Table/Brand/AdminBrand';
import AdminDetailBrand from './components/Admin/Table/Brand/AdminDetailBrand';
import AdminNewBrand from './components/Admin/Table/Brand/AdminNewBrand';
import AdminEditBrand from './components/Admin/Table/Brand/AdminEditBrand';
import AdminCategory from './components/Admin/Table/Category/AdminCategory';
import AdminEditCategory from './components/Admin/Table/Category/AdminEditCategory';
import AdminDetailCategory from './components/Admin/Table/Category/AdminDetailCategory';
import AdminUsers from './components/Admin/Table/User/AdminUsers';
import AdminListOrder from './components/Admin/Table/User/AdminListOrder';
import AdminOrderDetail from './components/Admin/Table/User/AdminOrderDetail';
import AdminUserDetail from './components/Admin/Table/User/AdminUserDetail';
import AdminListMenu from './components/Admin/Table/Menu/AdminListMenu';
import AdminNewMenu from './components/Admin/Table/Menu/AdminNewMenu';
import AdminEditMenu from './components/Admin/Table/Menu/AdminEditMenu';
import AdminDetailMenu from './components/Admin/Table/Menu/AdminDetailMenu';
import AdminListSlider from './components/Admin/Table/Slider/AdminListSlider';
import AdminNewSlider from './components/Admin/Table/Slider/AdminNewSlider';
import AdminEditSlider from './components/Admin/Table/Slider/AdminEditSlider';
import AdminDetailSlider from './components/Admin/Table/Slider/AdminDetailSlider';
import BlogDetail from './components/BlogDetail/BlogDetail';
import AdminListBlog from './components/Admin/Table/Blog/AdminListBlog';
import AdminNewBlog from './components/Admin/Table/Blog/AdminNewBlog';
import Blog from './components/Blog/Blog';
import AdminNewProduct from './components/Admin/Table/Product/AdminNewProduct';
import ProductSell from './components/Sell/ProductSell';
import Productinstallment from './components/Sell/Productinstallment';
import AdminEditProduct from './components/Admin/Table/Product/AdminEditProduct';
import AdminViewProduct from './components/Admin/Table/Product/AdminViewProduct';
import AdminEditBlog from './components/Admin/Table/Blog/AdminEditBlog';
import AdminViewBlog from './components/Admin/Table/Blog/AdminViewBlog';
import PolicyComponent from './components/Policy/PolicyComponent';
import AdminRelateProduct from './components/Admin/Table/Product/AdminRelateProduct';
import AdminPolicy from './components/Admin/Table/Policy/AdminPolicy';
import AdminNewPolicy from './components/Admin/Table/Policy/AdminNewPolicy';
import AdminEditPolicy from './components/Admin/Table/Policy/AdminEditPolicy';
import AdminViewPolicy from './components/Admin/Table/Policy/AdminViewPolicy';
import AdminContent from './components/Admin/Table/Content/AdminContent';
import AdminViewContent from './components/Admin/Table/Content/AdminViewContent';
import AccessoriesDetail from './components/ProductDetail/AccessoriesDetail';
import AdminOrder from './components/Admin/Table/Order/AdminOrder';
import AdminOrderList from './components/Admin/Table/Order/AdminOrderList';
import ChangePassword from './components/Information/ChangePassword';
import ConfigPassword from './components/Information/ConfigPassword';


function App() {
  return (
    <div>
      <Router>
        <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/allproduct" component={AllProduct}/>
       <Route path="/_:id" exact component={ProductDetail}/>
       <Route path="/accessories-detail/:accessories_id" exact component={AccessoriesDetail}/>
       <Route path="/a:id_blog" exact component={BlogDetail}/>
       <Route path="/product/:category_id" component={PageProduct}/>
       <Route path="/brand/:brand_id" component={PageBrand}/>
       <Route path="/register" component={Register}/>
       <Route path="/login" component={Login}/>
       <Route path="/cart" component={ShoppingCart}/>
       <Route path="/thong-tin" component={Main}/>
       <Route path="/dia-chi" component={Address}/>
       <Route path="/don-dat-hang/:user_id" component={Order}/>
       <Route path="/cai-dat/:user_id" component={Setting}/>
       <Route path="/change/:user_id" component={ChangePassword}/>
       
       <Route path="/search" component={AllSearch}/>
       <Route path="/lien-he" component={Content}/>
       <Route path="/zxx" component={Trade}/>
       <Route path="/blog" component={Blog}/>
     
      


       <Route path="/pay" component={Checkout}/>
       <Route path="/xem-chi-tiet/:id_order" component={OrderDetail}/>

       <Route path="/sell/productsell" component={ProductSell}/>
       <Route path="/installment/productinstallment" component={Productinstallment}/>

       <Route path="/dashboard" component={Dashboard}/>

       <Route path="/admin/product" component={AdminProduct}/>
       <Route path="/admin/brand" component={AdminBrand}/>
       <Route path="/admin/detailbrand/:id" component={AdminDetailBrand}/>
       <Route path="/admin/newbrand" component={AdminNewBrand}/>
       <Route path="/admin/editbrand/:id" component={AdminEditBrand}/>

       <Route path="/admin/category" component={AdminCategory}/>
       <Route path="/admin/newcategory" component={AdminNewCategory}/>
       <Route path="/admin/editcategory/:id" component={AdminEditCategory}/>
       <Route path="/admin/detailcategory/:id" component={AdminDetailCategory}/>

       <Route path="/admin/user" exact component={AdminUsers}/>
       <Route path="/listorder/:user_id" component={AdminListOrder}/>
       <Route path="/listorder/order" component={AdminOrderList}/>
       <Route path="/orderdetail/:id_order" component={AdminOrderDetail}/>
       <Route path="/admin/detailuser/:id_user" component={AdminUserDetail}/>



       <Route path="/admin/menu" exact component={AdminListMenu}/>
       <Route path="/admin/newmenu" component={AdminNewMenu}/>
       <Route path="/editmenu/:id_menu" component={AdminEditMenu}/>
       <Route path="/detailmenu/:id_menu" component={AdminDetailMenu}/>

       <Route path="/admin/policy" exact component={AdminPolicy}/>
       <Route path="/>:id_policy" component={AdminEditPolicy}/>
       <Route path="/newpolicy" component={AdminNewPolicy}/>
       <Route path="/<:id_policy" component={AdminViewPolicy}/>

       <Route path="/admin/slider" exact component={AdminListSlider}/>
       <Route path="/admin/newslider" component={AdminNewSlider}/>
       <Route path="/editslider/:id_slider" component={AdminEditSlider}/>
       <Route path="/detailslider/:id_slider" component={AdminDetailSlider}/>

       <Route path="/admin/blog" exact component={AdminListBlog}/>
       <Route path="/createblog" component={AdminNewBlog}/>
       <Route path="/+add" exact  component={AdminNewProduct}/>
       <Route path="/-:id" exact  component={AdminEditProduct}/>
       <Route path="/!:id" exact  component={AdminViewProduct}/>
       <Route path="/$:id_blog" exact  component={AdminEditBlog}/>
       <Route path="/£:id_blog" exact  component={AdminViewBlog}/>

       <Route path="/relateproduct/:id" exact  component={AdminRelateProduct}/>


       <Route path="/chinh-sach/:id_policy" exact  component={PolicyComponent}/>
       <Route path="/admin/content" exact  component={AdminContent}/>
       <Route path="/admin/detailcontent/:id_content" exact  component={AdminViewContent}/>
       </Switch>
      
      </Router>
      
    </div>
  );
}

export default App;

