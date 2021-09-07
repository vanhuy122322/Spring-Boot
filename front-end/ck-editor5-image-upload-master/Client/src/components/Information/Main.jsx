import React, { Component } from 'react';
import FooterComponent from '../Home/FooterComponent';
import HeaderComponent from '../Home/HeaderComponent';
import My from './My';
import MenuService from '../../services/Home/MenuService';
import AuthService from "../../services/User/auth.service";



class Main extends Component {
  constructor(props){
    super(props)
    this.logOut = this.logOut.bind(this);

    this.state= {
      menu: [],
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
     

    

    }
   
}
componentDidMount(){
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
  <HeaderComponent/>
  {/* ========================= SECTION PAGETOP ========================= */}
  <section className="section-pagetop bg-gray">
    <div className="containers">
      <h2 className="title-page">Tài khoản của tôi</h2>
    </div> {/* containers //  */}
  </section>
  {/* ========================= SECTION PAGETOP END// ========================= */}
  {/* ========================= SECTION CONTENT ========================= */}
  <section className="section-content padding-y">
    <div className="containers">
      <div className="row">
        <My/>
        <main className="col-md-9">
          <article className="card mb-3">
            {currentUser ?(
            <div className="card-body">
              <figure className="icontext">
                <div className="icon">
                  <img className="rounded-circle img-sm border" src="resources/images/avatars/avatar3.jpg" />
                </div>
                <div className="text">
                  <strong>Mr {currentUser.name} </strong> <br /> 
                  <p className="mb-2">Email: {currentUser.email}</p> 
                  <p className="mb-2">Số điện thoại: {currentUser.phone}</p> 
                  <a  style={{textDecoration:"none"}} href="/cai-dat" className="btn btn-light btn-sm">Edit</a>
                </div>
              </figure>
              <hr />
              <p>
                <i className="fa fa-map-marker text-muted" /> &nbsp; My address:  
                <br />
                {currentUser.address}  &nbsp; 
                <a  style={{textDecoration:"none"}} href="#" className="btn-link"> Edit</a>
              </p>
              
            </div> ): (
              <div className="card-body">
              <figure className="icontext">
                <div className="icon">
                  <img className="rounded-circle img-sm border" src="resources/images/avatars/avatar3.jpg" />
                </div>
                <div className="text">
                  <strong> mr huy </strong> <br /> 
                  <p className="mb-2"> myloginname@gmail.com</p> 
                  <a  style={{textDecoration:"none"}} href="#" className="btn btn-light btn-sm">Edit</a>
                </div>
              </figure>
              <hr />
              <p>
                <i className="fa fa-map-marker text-muted" /> &nbsp; My address:  
                <br />
                Tashkent city, Street name, Building 123, House 321 &nbsp; 
                <a  style={{textDecoration:"none"}} href="#" className="btn-link"> Edit</a>
              </p>
              
            </div>
            )
    }
          </article> 
        
        </main> {/* col.// */}
      </div>
    </div> {/* containers .//  */}
  </section>
  {/* ========================= SECTION CONTENT END// ========================= */}
  {/* ========================= FOOTER ========================= */}
 <FooterComponent/>
</div>

        );
    }
}

export default Main;