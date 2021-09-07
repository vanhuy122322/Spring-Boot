import React from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../services/User/auth.service";
import OrderService from '../../services/Order/OrderService';
import FooterComponent from '../Home/FooterComponent';
import UserService from "../../services/User/UserService";
import HeaderComponent from '../Home/HeaderComponent';
import My from './My';
import NumberFormat from "react-number-format";
const user = JSON.parse(localStorage.getItem("user")); 
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Bắt buộc!
      </div>
    );
  }
};

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      user_id: this.props.match.params.user_id,
      username: user.username,
      email: user.email,
      password: "",
      password: user.password,
      phone: user.phone,
      address: user.address,
      name: user.name,
      loading: false,
      message: "",
      admin:["ROLE_ADMIN"],
      user:["ROLE_USER"]
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

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

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
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

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });
    
    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
            this.props.history.push(`/thong-tin`);      
      },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: "Nhập mật khẩu không chính xác"
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  handleRegister(e) {
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


  render() {
    return (
      <div>
      <HeaderComponent/>
    <body >
      <section className="section-content padding-y"style={{marginTop:"40px"}}>
      {/* ============================ COMPONENT REGISTER   ================================= */}
      <div className="card mx-auto" style={{maxWidth: '520px', marginTop: '40px'}}>
        <article className="card-body">
          <header className="mb-4"><h4 className="card-title">Xác nhận mật khẩu</h4></header>

          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >

            <div className="form-group">
              <label htmlFor="password">Nhập mật khẩu cũ</label>
              <Input
                type="password"
                className="form-control"
            
              
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Nhập mật khẩu mới</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
              
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                onClick={this.handleRegister}
              >
             
                <span>Thay đổi</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
          </article>{/* card-body.// */}
  </div> {/* card .// */}
  <br /><br />
  {/* ============================ COMPONENT REGISTER  END.// ================================= */}
</section>
</body>
      <FooterComponent/>
    </div>
    );
  }
}

export default ChangePassword