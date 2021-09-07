import React, { Component } from 'react';
import FooterComponent from '../Home/FooterComponent'
import HeaderComponent from '../Home/HeaderComponent'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import BrandService from '../../services/Home/BrandService';
class PolicyComponent extends Component {
    constructor(props){
        super(props)
    
        this.state= {
            id_policy: this.props.match.params.id_policy,
          policy: [],
          policys: [],
        }
    }
    componentDidMount(){
        BrandService.getPolicy().then((res) =>{
    this.setState({policy:res.data})
    
    });
    BrandService.getPolicyById(this.state.id_policy).then( res =>{
        this.setState({policys:res.data});
    });
    }
    render() {
        return (
            <div>
 <HeaderComponent/>
 
  {/* ========================= SECTION CONTENT ========================= */}
  <section className="section-content bg-white padding-y">
  <div className="contentcontainersssss">
      <div className="row">
      <div className="col-xs-12 col-sm-3">
  <div className="shop-cs-sitebar">
    <div className="shop-cs-sbartitlebox">
      <a href="#fshop-menuchinhsach" title data-toggle="collapse" aria-expanded="true" className>
        <span className="shop-cs-sbariconmn"><i className="glyphicon glyphicon-menu-hamburger" /></span>
        Chính sách
      </a>
    </div>
    <div className="shop-cs-sbarlist policy-menu collapse in" id="fshop-menuchinhsach" aria-expanded="true" style={{}}>
      <ul>
      {
         this.state.policy.map(
          products =>
        <li>
          <a  href={`/chinh-sach/${products.id}`}>{products.name}</a>
        </li>
         )}
      </ul>
    </div>
  </div>
</div>
<div className="col-xs-12 col-sm-9">
<div className="shop-cs-mainbox policy-title" data-catecomment={7}>
  <h3 className="shop-cs-maintitle">{this.state.policys.name}</h3>
  <div className="policy-container">
    <p style={{textAlign: 'justify'}}>
    <p>{ReactHtmlParser(this.state.policys.description) }</p>
    </p>
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

export default PolicyComponent;