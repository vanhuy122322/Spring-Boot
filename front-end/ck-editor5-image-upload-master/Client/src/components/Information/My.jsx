import React, { Component } from 'react';
import AuthService from "../../services/User/auth.service";


const user = AuthService.getCurrentUser();
class My extends Component {
  constructor(props){
    super(props)
    this.logOut = this.logOut.bind(this);

    this.state= {
     
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
            <aside className="col-md-3">
            <nav className="list-group">
            {currentUser ?(
                     
                        <article>
                          
                        <a className="list-group-item active" href="/thong-tin"> Thông tin tài khoản</a>
       
              <a  style={{textDecoration:"none"}} className="list-group-item" href={`/don-dat-hang/${currentUser.id}`}> Đơn hàng </a>
              <a  style={{textDecoration:"none"}} className="list-group-item" href={`/cai-dat/${currentUser.id}`}> Thay đổi thông tin </a>
              <a  style={{textDecoration:"none"}} href="/" className="list-group-item" onClick={this.logOut}> Log out </a>
            <div></div>
                        </article>
                       ):(
                        <div></div>
                      )}
              
            
            </nav>
          </aside> 
        );
    }
}

export default My;