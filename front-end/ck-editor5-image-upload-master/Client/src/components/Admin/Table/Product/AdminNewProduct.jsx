import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import * as ClassicEditor  from '@ckeditor/ckeditor5-build-classic'
//import  * as Essentials from '@ckeditor/ckeditor5-essentials';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import AdminService from '../../../../services/Admin/AdminService';
import BrandService from '../../../../services/Home/BrandService';
import CategoryService from '../../../../services/Home/CategoryService';
import AdminMenu from '../../AdminMenu'
import AdminUser from '../../AdminUser'
import CKEditor from '@ckeditor/ckeditor5-react'
console.log(ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ));
export default class AdminNewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [],
      categorys: [],
      profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      profileImgs:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      profileImgss:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      description: '',
      diameter: '',
      discount: '',
      energysources: '',
      facethickness: '',
      framematerial: '',
      gender: '',
      image: '',
      relateimage: '',
      relateimage1: '',
      material: '',
      origin: '',
      price: '',
      sell: '',
      status: '',
      title: '',
      waterfroof: '',
      wirematerial: '',
      wirewidth: '',
      brand_id: 1,
      category_id: 1,
      price_net: '',
      promotion: '',
    };
    this.handleBrand = this.handleBrand.bind(this);
    this.onChangeDiameter = this.onChangeDiameter.bind(this);
    this.ckeditorstate = this.ckeditorstate.bind(this);
    this.onChangeDiscount = this.onChangeDiscount.bind(this);
    this.onChangeEnergySources = this.onChangeEnergySources.bind(this);
    this.onChangeFaceThickness = this.onChangeFaceThickness.bind(this);
    this.onChangeFrameMaterial = this.onChangeFrameMaterial.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeRelateImage = this.onChangeRelateImage.bind(this);
    this.onChangeRelateImage1 = this.onChangeRelateImage1.bind(this);
    this.onChangeMaterial = this.onChangeMaterial.bind(this);
    this.onChangeOrigin = this.onChangeOrigin.bind(this);
    this.onChangePrice= this.onChangePrice.bind(this);
    this.onChangeSell = this.onChangeSell.bind(this);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeWaterFroof = this.onChangeWaterFroof.bind(this);
    this.onChangeWireMaterial= this.onChangeWireMaterial.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);

    this.onChangeWireWidth = this.onChangeWireWidth.bind(this);
    this.onChangeBrand_id = this.onChangeBrand_id.bind(this);
    this.onChangeCategory_idl= this.onChangeCategory_idl.bind(this);
    this.onChangePrice_net = this.onChangePrice_net.bind(this);
    this.onChangePromotion = this.onChangePromotion.bind(this);
    }

    componentDidMount(){
      BrandService.getBrand().then((res) =>{
        this.setState({brands:res.data})
        
        });
        CategoryService.getCategory().then((res) =>{
          this.setState({categorys:res.data})
          
          });
    }
    onChangeDiameter(e) {
      this.setState({
        diameter: e.target.value
      });
    }
    onChangeDiscount(e) {
      this.setState({
        discount: e.target.value
      });
    }
    onChangeEnergySources(e) {
        this.setState({
          energysources: e.target.value
        });
      }


      onChangeFaceThickness(e) {
        this.setState({
          facethickness: e.target.value
        });
      }
      onChangeFrameMaterial(e) {
        this.setState({
          framematerial: e.target.value
        });
      }
      onChangeGender(e) {
          this.setState({
            gender: e.target.value
          });
        }




        onChangeMaterial(e) {
          this.setState({
            material: e.target.value
          });
        }
        onChangeOrigin(e) {
          this.setState({
            origin: e.target.value
          });
        }
        onChangePrice(e) {
            this.setState({
              price: e.target.value
            });
          }
          onChangeSell(e) {
            this.setState({
              sell: e.target.value
            });
          }
          onChangeTitle(e) {
            this.setState({
              title: e.target.value
            });
          }
          onChangeWaterFroof(e) {
              this.setState({
                waterfroof: e.target.value
              });
            }

            

            
          onChangeWireMaterial(e) {
          this.setState({
            wirematerial: e.target.value
          });
        }
        onChangeStatus(e) {
          this.setState({
            status: e.target.value
          });
        }
        onChangeWireWidth(e) {
            this.setState({
              wirewidth: e.target.value
            });
          }
          onChangeBrand_id(e) {
            this.setState({
              brand_id: e.target.value
            });
         
          }
          onChangeCategory_idl(e) {
            this.setState({
              category_id: e.target.value
            });
          }
          onChangePrice_net(e) {
              this.setState({
                price_net: e.target.value
              });
            }
            onChangePromotion(e) {
              this.setState({
                promotion: e.target.value
              });
            }





            onChangeRelateImage(e) {
              let file=e.target.files[0]
              this.setState({
                relateimage: file.name
              });
              const reader = new FileReader();
              reader.onload = () =>{
                if(reader.readyState === 2){
                  this.setState({profileImgs: reader.result})
                }
             }
              reader.readAsDataURL(e.target.files[0])
              console.log("STATE", {file})
        
            }

            onChangeRelateImage1(e) {
              let file=e.target.files[0]
              this.setState({
                relateimage1: file.name
              });
              const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({profileImgss: reader.result})
         }
      }
        reader.readAsDataURL(e.target.files[0])
              console.log("STATE", {file})
        
            }

      onChangeImage(e) {
        let file=e.target.files[0]
        this.setState({
          image: file.name
        });
        const reader = new FileReader();
        reader.onload = () =>{
         if(reader.readyState === 2){
           this.setState({profileImg: reader.result})
         }
       }
       reader.readAsDataURL(e.target.files[0])
        console.log("STATE", {file})
  
      }

    ckeditorstate = (event, editor) =>{
        const data = editor.getData();
        this.setState({description:data});
        console.log("STATE", {data})
    }

    handleBrand(e) {
        e.preventDefault();
       let product={price_net:this.state.price_net,
        category_id:this.state.category_id,
        brand_id:this.state.brand_id,
        wirewidth:this.state.wirewidth,
        wirematerial:this.state.wirematerial,
        waterfroof:this.state.waterfroof,
        status:this.state.status,
        sell:this.state.sell,
        price:this.state.price,
        origin:this.state.origin,
        material:this.state.material,
        gender:this.state.gender,
        framematerial:this.state.framematerial,
        facethickness:this.state.facethickness,
        energysources:this.state.energysources,
        discount:this.state.discount,
        diameter:this.state.diameter,
        description:this.state.description,
        title:this.state.title,
        image:this.state.image,
        relateimage:this.state.relateimage,
        relateimage1:this.state.relateimage1,
        promotion:this.state.promotion};
       console.log('product=>' +JSON.stringify(product));
  
       AdminService.createProduct1(this.state.category_id,this.state.brand_id, product).then((res) => {
        this.props.history.push("/admin/product");
      });
  };
  
  
    render() {const {profileImgss,profileImgs, profileImg} = this.state
    console.log('STATE _', this.state);
        return (
            <div>
                  <div id="wrapper">
        {/* Sidebar */}
       <AdminMenu/>
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <AdminUser/>

  <main>
  <div className="rows"   style={{ marginLeft: "10px" }}>
     
            <h4 className="card-title">THÊM SẢN PHẨM</h4>
          
            <div className="col-12 grid-margin">
  <div className="card">
    <div className="card-body">
     
      <form className="form-sample">
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Tên sản phẩm</label>
              <div className="col-sm-9">
                <Form.Control type="text" name="title" id="title"  value={this.state.title}
                onChange={this.onChangeTitle} />
                </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Số lượng sản phẩm</label>
              <div className="col-sm-9">
                <Form.Control type="number" name="discount" id="discount"  value={this.state.discount}
                onChange={this.onChangeDiscount}>
                </Form.Control></div>
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Đường kình mặt kính</label>
              <div className="col-sm-9">
                <Form.Control type="text" name="diameter" id="diameter"  value={this.state.diameter}
                onChange={this.onChangeDiameter}>
                </Form.Control></div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Bộ máy sản phẩm</label>
              <div className="col-sm-9">
                <Form.Control type="text" name="energysources" id="energysources"  value={this.state.energysources}
                onChange={this.onChangeEnergySources}>
                </Form.Control></div>
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Thương hiệu</label>
              <div className="col-sm-9">
                <select className="form-control" name="brand_id"  value={this.state.brand_id} onChange={this.onChangeBrand_id}>
                {
         this.state.brands.map(
          brandss =>
                  <option  value={brandss.id}
                 >{brandss.title}</option>
         )}
                </select>
              </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Độ rộng dây</label>
              <div className="col-sm-9">
                <Form.Control type="text" name="wirewidth" id="wirewidth"  value={this.state.wirewidth}
                onChange={this.onChangeWireWidth} >
                </Form.Control></div>
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Chất liệu khung viền</label>
              <div className="col-sm-9">
                <Form.Control type="text"  name="framematerial" id="framematerial"  value={this.state.framematerial}
                onChange={this.onChangeFrameMaterial}>
                </Form.Control></div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Độ dày mặt kính</label>
              <div className="col-sm-9">
                <Form.Control type="text" name="facethickness" id="facethickness"  value={this.state.facethickness}
                onChange={this.onChangeFaceThickness}>
                </Form.Control></div>
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <Form.Control type="text" name="gender" id="gender"  value={this.state.gender}
                onChange={this.onChangeGender}>
                </Form.Control></div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Chất liệu mặt kích</label>
              <div className="col-sm-9">
                <Form.Control type="text" name="material" id="material"  value={this.state.material}
                onChange={this.onChangeMaterial}>
                </Form.Control></div>
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Xuất xứ sản phẩm</label>
              <div className="col-sm-9">
                <Form.Control type="text" name="origin" id="origin"  value={this.state.origin}
                onChange={this.onChangeOrigin}>
                </Form.Control></div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">  
              <label className="col-sm-3 col-form-label">Chống nước</label>
              <div className="col-sm-9">
                <Form.Control type="text"  name="waterfroof" id="waterfroof"  value={this.state.waterfroof}
                onChange={this.onChangeWaterFroof}>
                </Form.Control></div>
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Chất liệu dây</label>
              <div className="col-sm-9">
                <Form.Control type="text"  name="wirematerial" id="wirematerial"  value={this.state.wirematerial}
                onChange={this.onChangeWireMaterial}>
                </Form.Control></div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Loại sản phẩm</label>
              <div className="col-sm-9">
                <select className="form-control" name="category_id" id="category_id" value={this.state.category_id} onChange={this.onChangeCategory_idl}>
                   {
         this.state.categorys.map(
          brands =>
                  <option  value={brands.id} >{brands.name}</option>
         )}
                </select>
              </div>
            </Form.Group>
          </div>
          </div>
          <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Giảm giá </label>
              <div className="col-sm-9">
                <Form.Control type="number" name="sell" id="sell"  value={this.state.sell}
                onChange={this.onChangeSell}>
                </Form.Control></div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Giá tiền</label>
              <div className="col-sm-9">
                <Form.Control type="number"  name="price" id="price"  value={this.state.price}
                onChange={this.onChangePrice}>
                </Form.Control></div>
            </Form.Group>
          </div>
          </div>
          <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Giá khuyến mãi</label>
              <div className="col-sm-9">
                <Form.Control type="text" name="price_net" id="price_net"  value={this.state.price_net}
                onChange={this.onChangePrice_net}>
                </Form.Control></div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Trạng thái</label>
              <div className="col-sm-9">
                <select className="form-control"  onChange={this.onChangeStatus}>
                  <option name="status" id="status" value="2"> Khuyễn mãi</option>
                  <option name="status" id="status" value="1">Mới</option>
                  <option name="status" id="status" value="3">Nổi bật</option>
                </select>
              </div>
            </Form.Group>
          </div>
          </div>
          <div className="row">
              <div className="col-md-6">
                <Form.Group className="row">
                  <label className="col-sm-3 col-form-label">Qùa tặng</label>
                  <div className="col-sm-9">
                    <Form.Control type="text" name="promotion" id="promotion"  value={this.state.promotion}
                    onChange={this.onChangePromotion}>
                    </Form.Control></div>
                </Form.Group>
              </div>
              
              </div>
          <div className="row">
          <div className="col-md-4">
            <Form.Group className="row">
            <label >Hình ảnh sản phẩm</label>
                <Form.Control type="file" accept="image/*" name="image" id="input" onChange={this.onChangeImage} />
                <div className="img-holder">
						<img style={{ height: "95px",width:"95px" }} src={profileImg} alt="" id="img" className="img" />
					</div>
            </Form.Group>
          </div>
          <div className="col-md-4" >
          <Form.Group className="row">
            <label >Hình ảnh liên quan </label>
                <Form.Control type="file" accept="image/*" name="relateimage" id="relateimage" onChange={this.onChangeRelateImage} />
                <div className="img-holder">
						<img style={{ height: "95px",width:"95px" }} src={profileImgs} alt="" id="img" className="img" />
					</div>
            </Form.Group>
          
          </div>
          <div className="col-md-4" >
          <Form.Group className="row">
            <label >Hình ảnh liên quan </label>
                <Form.Control type="file" accept="image/*" name="relateimage1" id="relateimage1" onChange={this.onChangeRelateImage1} />
                <div className="img-holder">
						<img style={{ height: "95px",width:"95px" }} src={profileImgss} alt="" id="img" className="img" />
					</div>
            </Form.Group>
       
          </div>
          </div>
        
              <Form.Group>
                <label >Mô tả thươn hiệu</label>
                <CKEditor
      editor ={ClassicEditor}
       onInit = { editor =>{
           //// Here the editor is ready to be used
       }}
       onChange ={this.ckeditorstate}
       value={this.state.description}
       config = {
        {
           // plugins: [ Essentials ],
          ckfinder: {
              // The URL that the images are uploaded to.
              uploadUrl: '/upload', 
  
              // Enable the XMLHttpRequest.withCredentials property.
              withCredentials: true,
  
              // Headers sent along with the XMLHttpRequest to the upload server.
              headers: {
                  'X-CSRF-TOKEN': 'CSFR-Token',
                   Authorization: 'Bearer <JSON Web Token>'
              }
        } }

     }
       
     /></Form.Group>
       

  
<div className="form-check">
                
                </div>
                <button onClick={this.handleBrand}  className="btn btn-primary mr-2">Lưu</button>
                <a type="submit" href="/admin/brand" className="btn btn-primary mr-2">Quay lại</a>

      {/* <textarea type="text"  cols="30" rows="15" value={this.state.content}   onChange={this.handleStateChanges} className="form-control" name="content" placeholder=" Enter Phone" /> */}
  
      </form>
      </div>
  </div>
</div>
</div>

</main>
  </div>
  </div>
  </div>
               

            </div>
        )
    }
}
