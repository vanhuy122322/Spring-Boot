import React, { Component } from 'react';
import TradeService from '../../services/Home/TradeService';

class TradeComponent extends Component {
  constructor(props){
    super(props)

    this.state= {
      trade: []

    }
}
componentDidMount(){
TradeService.getTrade().then((res) =>{
this.setState({trade:res.data})

});
}
    render() {
        return (
            <div className="containers" >
                <section className="padding-bottom">
  <header className="section-heading heading-lines">
    <h4 className="title-section text-uppercase">Dịch vụ</h4>
  </header>
  <div className="row">
  {
               this.state.trade.map(
                trades =>
    <div className="col-md-3 col-sm-6">
      <article className="card card-post">
        <img src={`${process.env.PUBLIC_URL}/resources/images/posts/${trades.image}`} className="card-img-top" />
        <div className="card-body">
          <a  style={{textDecoration:"none"}} className="title" href="/" >{trades.title}</a>
          
        </div>
      </article> {/* card.// */}
    </div> )}
    
  </div> {/* row.// */}
</section>

            </div>
        );
    }
}

export default TradeComponent;