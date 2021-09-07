import React, { Component } from 'react';
import FooterComponent from '../Home/FooterComponent';
import HeaderComponent from '../Home/HeaderComponent';
import My from './My';
import AuthService from "../../services/User/auth.service";

const user = AuthService.getCurrentUser();


class Address extends Component {
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
                    <a style={{textDecoration:"none"}} href="#" className="btn btn-light mb-3"> <i className="fa fa-plus" /> Thêm địa chỉ mới </a>
                    <div className="row"> {currentUser ?(
                      <div className="col-md-6">
                        <article className="box mb-4">
                          
                          <p>{currentUser.address}</p>
                          <a style={{textDecoration:"none"}} href="#" className="btn btn-light disabled"> <i className="fa fa-check" /> Default</a> <a style={{textDecoration:"none"}} href="#" className="btn btn-light"> <i className="fa fa-pen" /> </a>   <a style={{textDecoration:"none"}} href="#" className="btn btn-light"> <i className="text-danger fa fa-trash" /></a>
                        </article>
                      </div> ):(
                        <div></div>
                      )}
                      
                    </div> {/* row.// */}
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

export default Address;