import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import UserService from "../../services/User/UserService";
import AuthService from "../../services/User/auth.service";
import FooterComponent from '../Home/FooterComponent';
import HeaderComponent from '../Home/HeaderComponent';
import My from './My';
const user = JSON.parse(localStorage.getItem("user")); 
class Setting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.match.params.user_id,
      username: user.username,
      email: "",
  password:"",
      phone: "",
      address: "",
      name: "",
      successful: false,
      message: "",
      users: [],
      id: "",
    };
  
    this.handleUpdate = this.handleUpdate.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  componentDidMount(){
    UserService.getUserById(this.state.user_id).then((res) =>{
       let users=res.data;
      this.setState({name:users.name,phone:users.phone,
     address:users.address,
       email:users.email,
       password:users.password,
       id:users.id,
     });
      });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

 
  onChangePhone(e){
    this.setState({
      phone: e.target.value
    });
  }

  onChangeAddress(e){
    this.setState({
      address: e.target.value
    });
  }
  onChangeName(e){
    this.setState({
      name: e.target.value
    });
  }




 

  handleUpdate(e) {
    e.preventDefault();
   let users={
     username:this.state.username,
    email:this.state.email,
    phone:this.state.phone,
    address:this.state.address,
    password:this.state.password,
    name:this.state.name,
  };
   console.log('user=>' +JSON.stringify(users));
   UserService.getUpdateUser(users,this.state.user_id).then(res=> {
    this.props.history.push("/thong-tin");

});
};
handlePassword(id) {
  this.props.history.push(`/change/${id}`);
};
    render() {
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
                  <div className="card">
                    <div className="card-body">
                      <form className="row">
                        <div className="col-md-9">
                          <div className="form-row">
                            <div className="col form-group">
                              <label>Name</label>
                              <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChangeName}  defaultValue="Vosidiy" />
                            </div> {/* form-group end.// */}
                            <div className="col form-group">
                              <label>Email</label>
                              <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChangeEmail}  defaultValue="vosidiy@gmail.com" />
                            </div> {/* form-group end.// */}
                          </div> {/* form-row.// */}
                          <div className="form-row">
                            <div className="col form-group">
                              <label>Địa chỉ</label>
                              <input type="text" name="address" value={this.state.address} onChange={this.onChangeAddress} className="form-control" />
                            </div> {/* form-group end.// */}
                          </div> {/* form-row.// */}
                          <div className="form-row">
                            
                            <div className="form-group col-md-6">
                              <label>Số điện thoại</label>
                              <input type="text" name="phone" value={this.state.phone} onChange={this.onChangePhone} className="form-control"  />
                            </div> {/* form-group end.// */}
                          </div> {/* form-row.// */}
                          <button onClick={this.handleUpdate} className="btn btn-primary">Lưu</button>	
                          <button  onClick={(e) => this.handlePassword(this.state.id)} className="btn btn-light">Đổi mật khẩu</button>	
                          <br /><br /><br /><br /><br /><br />
                        </div> {/* col.// */}
                       
                      </form>
                    </div> {/* card-body.// */}
                  </div> {/* card .// */}
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

export default Setting;