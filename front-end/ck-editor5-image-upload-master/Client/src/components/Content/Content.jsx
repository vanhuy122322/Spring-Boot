import React, { Component } from 'react';
import FooterComponent from '../Home/FooterComponent'
import HeaderComponent from '../Home/HeaderComponent'
import AdminService from '../../services/Admin/AdminService';
class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
        title: '',
        status: '',
        description: '',
        name: '',
        phone: '',
        email: '',
    };
    this.handleBrand = this.handleBrand.bind(this);
this.onChangeStatus = this.onChangeStatus.bind(this);
this.onChangeTitle = this.onChangeTitle.bind(this);
this.onChangeDescription = this.onChangeDescription.bind(this);
this.onChangePhone = this.onChangePhone.bind(this);
this.onChangeEmail = this.onChangeEmail.bind(this);
this.onChangeName = this.onChangeName.bind(this);
}
onChangeStatus(e) {
  this.setState({
    status: e.target.value
  });
}
onChangeName(e) {
  this.setState({
    name: e.target.value
  });
}
onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }


handleBrand(e) {
    e.preventDefault();
   let content={description:this.state.description,title:this.state.title,name:this.state.name,status:this.state.status,phone:this.state.phone,email:this.state.email};
   console.log('brand=>' +JSON.stringify(content));

   AdminService.creatContact(content).then(res=> {
    this.props.history.push("/");
});
};
    render() {
        return (
            <div>
 <HeaderComponent/>
 
  {/* ========================= SECTION CONTENT ========================= */}
  <section className="section-content bg-white padding-y">
  <div className="contentcontainersssss">
      <div className="row">
    
      <div className="col-4">
      <div className="contact-form relative">
  <div className="preloader">
    <div className="loaderweb" />
  </div>
  <form method="post" id="contact-form">
    <h1>Shop ?????ng H??? Xin H??n H???nh ???????c H??? Tr??? Qu?? Kh??ch</h1>
    <div className="the-form-wrapper">
      <div className="topic-filter-wrapper clearfix">
        <label htmlFor="topic-filter">Qu?? kh??ch ??ang quan t??m v???: </label>
        <strong className="required">*</strong>
        <select id="topic-filter" className="topic-filter" name="status" value={this.state.status}  onChange={this.onChangeStatus}>
          <option value={-1}>Ch???n ch??? ?????</option>
          <option value={1}>T?? v???n</option>
          <option value={2}>Khi???u n???i - Ph???n ??nh</option>
          <option value={3}>H???p t??c v???i shopdongho</option>
          <option value={4}>G??p ?? ki???n</option>
        </select>
      </div>
      <div className="row-wrapper ">
        <div className="label-wrapper">
          <label htmlFor="title">Ti??u ?????</label>
        </div>
        <div className="input-wrapper">
          <input name="title" value={this.state.title}  onChange={this.onChangeTitle} type="text" />
        </div>
      </div>
      <div className="row-wrapper ">
        <div className="label-wrapper">
          <label htmlFor="message">N???i dung</label>
         
        </div>
        <div className="input-wrapper">
          <textarea  required oninvalid="this.setCustomValidity('Vui l??ng nh???p n???i dung!')" name="description" value={this.state.description}  onChange={this.onChangeDescription} placeholder="Xin qu?? kh??ch vui l??ng m?? t??? chi ti???t"  />
        </div>
      </div>
      <div className="row-wrapper ">
        <div className="label-wrapper">
          <label htmlFor="fullname">H??? v?? t??n</label>
          
        </div>
        <div className="input-wrapper">
          <input name="name" value={this.state.name}  onChange={this.onChangeName} type="text" />
        </div>
      </div>
      <div className="row-wrapper ">
        <div className="label-wrapper">
          <label htmlFor="email">?????a ch??? email</label>
          
        </div>
        <div className="input-wrapper">
          <input name="email" value={this.state.email}  onChange={this.onChangeEmail} required oninvalid="this.setCustomValidity('Email kh??ng h???p l???!')"  type="email" />
        </div>
      </div>
      <div className="row-wrapper ">
        <div className="label-wrapper">
          <label htmlFor="tel">S??? ??i???n tho???i</label>
  
        </div>
        <div className="input-wrapper">
          <input name="phone" value={this.state.phone}  onChange={this.onChangePhone} required pattern="84|0[3|5|7|8|9][0-9]{8}" oninvalid="this.setCustomValidity('S??? ??i???n tho???i kh??ng h???p l???!')" oninput="this.setCustomValidity('')" type="tel" maxLength={10} />
        </div>
      </div>
    </div>
    <div className="submit-wrapper">
      <button onClick={this.handleBrand} className="submit" type="submit">G???i Li??n H???</button>
    </div>
   </form>
</div>

      </div>
      <div className="col-7" style={{marginLeft:"70px"}} ><div className="contact-info">
  <h3>Th??ng Tin Li??n H??? Kh??c</h3>
  <div className="quote">T??m si??u th??? Shop ?????ng H???? Xin m???i gh?? th??m trang <a style={{textDecoration:"none"}} href="/he-thong-sieu-thi-the-gioi-di-dong" title="T??m si??u th???" target="_blank">T??m si??u th???</a> ????? xem b???n ????? v?? ?????a ch??? c??c si??u th??? tr??n to??n qu???c.</div>
  <div className="content">
    <p>B??o ch??, h???p t??c: li??n h??? <a style={{textDecoration:"none"}} href="mailto:tu.lethi@shopdongho.com">baochi@shopdongho.com</a></p>
    <p>T???ng ????i t?? v???n, h??? tr??? kh??ch h??ng (7h30 ?????n 22h): <span className="tel">1800.1060 </span>ho???c <span className="tel">028.3622.1060</span></p>
    <p>T???ng ????i khi???u n???i: <span className="tel">1800.1062</span></p>
    <p>Email: <a style={{textDecoration:"none"}} href="mailto:cskh@shopdongho.com">cskh@shopdongho.com</a></p>
  </div>
  <div className="with-map clearfix">
    <div className="company-address-wrapper">
      <div className="company-name">C??ng Ty C??? Ph???n ????ng H???</div>
      <div className="company-address">
        <p>T??a nh?? MWG - L?? T2-1.2, ???????ng D1, Khu C??ng Ngh??? Cao, P. T??n Ph??, Qu???n 9 , TP. H??? Ch?? Minh</p>
        <p>?????a ch??? ????ng k?? kinh doanh: 128 Tr???n Quang Kh???i, P. T??n ?????nh, Q1, TP HCM</p>
        <p>??i???n tho???i: <span className="tel">(028) 38 125 960</span></p>
        <p>Fax: <span className="tel">028 38 125 961</span></p>
      </div>
    </div>
    <div className="map-wrapper">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d979.6171914801357!2d106.7971172!3d10.8519064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527327468fff7%3A0x7e7d9a5c638bdb95!2zVMOyYSBuaMOgIE1XRyAtIENUQ1AgVGjhur8gR2nhu5tpIERpIMSQ4buZbmc!5e0!3m2!1svi!2s!4v1546422318279" width={430} height={350} frameBorder={0} style={{border: 0}} allowFullScreen />
    </div>
  </div>
</div>
</div>
    </div> {/* containers .//  */}
    </div>
  </section>
  {/* ========================= SECTION CONTENT END// ========================= */}
  {/* ========================= FOOTER ========================= */}
  <FooterComponent/>
</div>

        );
    }
}

export default Content;