import React, { Component } from 'react';
import BlogService from '../../services/Home/BlogService';
import parse from 'html-react-parser';
class BlogComponent extends Component {
  constructor(props){
    super(props)

    this.state= {
      blog: [],
      blogs: []

    }
}
componentDidMount(){
BlogService.getYearBlog().then((res) =>{
this.setState({blog:res.data})

});
BlogService.getBlog().then((res) =>{
  this.setState({blogs:res.data})
  
  });
}
    render() {
        return (
            <div className="containers">
                <section className="padding-bottom">
                <a  style={{textDecoration:"none"}} href="/blog" class="ttl-main">
    <h4 className="title-layout">TIN TỨC</h4>
    
</a>
<a  style={{textDecoration:"none"}} className="ttl-mains">
    <h4 className="title-layout">GAME, ỨNG DỤNG</h4>
    
  </a>

      <div className="row">
        <div className="col1">
  <div className="col1-ct">

        <aside className="col-md-5">
        {
         this.state.blog.map(
          products =>
          <div>
          <div className="card card-banner-lg bg-dark">
            <img src={`${process.env.PUBLIC_URL}/resources/images/blog/${products.image}`} className="card-img opacity" />
          </div>
          <a  style={{textDecoration:"none"}} href={`/${products.id}`} class="col1-title">{products.title}</a>
          <p class="col1-hour">{products.modifieddate}</p>
          </div>
          )}
        </aside>
        

        <aside className="col-md-3">
          <div className="col1-simple">
          {
         this.state.blogs.map(
          product =>
          <a  style={{textDecoration:"none"}}  className="spl-item">
  <div className="spl-item__img">
    <img src={`${process.env.PUBLIC_URL}/resources/images/blog/${product.image}`} className=" lazyloaded"  />
  </div>
  <div className="spl-item__content">
    <a href={`/${product.id}`} className="spl-item-title">{product.title}</a>
    <p className="spl-item-hour">{product.modifieddate}</p>
  </div>
</a>
         )}
          </div>
        </aside>
        <aside className="col-md-4">
          <div className="col1-simple">
          <div className="col2">
 
  <div className="col2__ct">
    <div className="game game-slider owl-carousel owl-loaded owl-drag" data-size={4}>
      <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '1584px'}}><div className="owl-item active" style={{width: '447px'}}><div className="game__item">
              <a  style={{textDecoration:"none"}} href="/game-app/pubg-mobile-vn-winner-winner-chicken-dinner-219952">
                <img src={`${process.env.PUBLIC_URL}/resources/images/brand/Untitled-1-600x360-3.jpg`}   alt="PUBG MOBILE VN - Winner Winner Chicken Dinner"  />
                <div className="game-box-wrap">
  <div className="game-box-img">
    <img data-src="https://cdn.tgdd.vn/2020/03/GameApp/Screenshot_20200318_161444_com.android.vending-200x200-1.jpg" className="ls-is-cached lazyloadedss" alt="PUBG MOBILE VN - Winner Winner Chicken Dinner" src="https://cdn.tgdd.vn/2020/03/GameApp/Screenshot_20200318_161444_com.android.vending-200x200-1.jpg" />
  </div>
  <div className="game-box-main">
    <h4 className="game-title">PUBG MOBILE VN - Winner Winner Chicken Dinner</h4>
    
  </div>
</div>

              </a>
              <div className="game-box">
                <div className="game-box-list">
                  <a  style={{textDecoration:"none"}} href="/game-app/loot-box-la-gi-cach-nha-phat-hanh-game-thu-loi-day-tranh-cai-1359359">Loot box là gì? Cách nhà phát hành game thu lợi đầy tranh cãi</a>
                  <a  style={{textDecoration:"none"}} href="/game-app/top-game-online-nuoc-ngoai-hay-nhat-thu-hut-nhieu-nguoi-choi-1359178">Top 13 game online nước ngoài hay nhất thu hút nhiều người chơi</a>
                </div>
              </div>
            </div>
            </div></div></div></div>
  </div>
</div>

          </div>
        </aside>
      </div> {/* row.// */}
      </div>
      </div>
    </section>
            </div>
        );
    }
}

export default BlogComponent;