import React, { Component } from 'react';
import FooterComponent from '../Home/FooterComponent'
import HeaderComponent from '../Home/HeaderComponent'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../../services/User/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
       Bắt buộc
      </div>
    );
  }
};
const vemail = value => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
         Email không hợp lệ
        </div>
      );
    }
  };
  
  const vusername = value => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
         Tên người dùng phải có từ 6 đến 20 ký tự.
        </div>
      );
    }
  };
 

  const vname = value => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
         
        </div>
      );
    }
  };

  const vaddress = value => {
    if (value.length < 3 || value.length > 50) {
      return (
        <div className="alert alert-danger" role="alert">
         
        </div>
      );
    }
  };
  
  const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
         Tên người dùng phải có từ 6 đến 20 ký tự vừa ký tự thường vừa ký tự số.
        </div>
      );
    }
  };

  const vphone = value => {
    if (value.length < 10 || value.length > 12) {
      return (
        <div className="alert alert-danger" role="alert">
        
        </div>
      );
    }
  };
  
class Register extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
          username: "",
          email: "",
          password: "",
          phone: "",
          address: "",
          name: "",
          successful: false,
          message: ""
        };
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



    
      handleRegister(e) {
        e.preventDefault();
    
        this.setState({
          message: "",
          successful: false
        });
    
        this.form.validateAll();
    
        if (this.checkBtn.context._errors.length === 0) {
          AuthService.register(
            this.state.username,
            this.state.email,
            this.state.phone,
            this.state.address,
            this.state.name,
            this.state.password
          ).then(
            response => {
              this.setState({
                message: response.data.message,
                successful: true
              });
            },
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              this.setState({
                successful: false,
                message: resMessage
              });
            }
          );
        }
      }
    render() {
        return (
            <div>
           <HeaderComponent/>
            {/* ========================= SECTION CONTENT ========================= */}
            <section className="section-content padding-y">
            <div className="card mx-auto" style={{maxWidth: '520px', marginTop: '40px'}}>
      <article className="card-body">
        <header className="mb-4"><h4 className="card-title">Sign up</h4></header>
            <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div className="containers">
                <div className="form-row">
                 <div className="col form-group">
                  <label htmlFor="username">Tên tài khoản</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, vemail]}
                  />
                </div>
                </div>
<div className="form-row">
                <div className="col form-group">
                  <label htmlFor="phone">Số điện thoại</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.onChangePhone}
                    validations={[required, vphone]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Họ tên</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    validations={[required, vname]}
                  />
                </div>
                </div>
                <div className="form-group">
                  <label htmlFor="address">Địa chỉ</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                    validations={[required, vaddress]}
                  />
                </div>

                
                <div className="form-row">
                <div className="col form-group">
                  <label htmlFor="password">Nhập mật khẩu</label>
                  <Input
                    style={{ width: "100%" }}
                    type="password"
                    className="form-controls"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                  </div>
                  <div className="col form-group">
                   <label htmlFor="password">Nhập lại mật khẩu</label>
                  <Input
                    style={{ width: "100%" }}
                    type="password"
                    className="form-controls"
                    name="password"
                  
                  
                  />
                
                 </div>
                 </div>

                <div className="form-group">
                  <div>
  <button type="submit" className="btn btn-primary btn-block"> Đăng ký</button>
</div>
</div>
              </div>
            )}

            {this.state.message && (
             <div className=" form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
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
          </article>
          </div>
              {/* ============================ COMPONENT REGISTER  END.// ================================= */}
            </section>
            {/* ========================= SECTION CONTENT END// ========================= */}
            {/* ========================= FOOTER ========================= */}
          <FooterComponent/>
          </div>
          
        );
    }
}

export default Register;