import React, { Component } from 'react'

export default class AdminMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
   
    }
    
    
  }
 

    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar - Brand */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/dashboard">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
        <a className="nav-link" href="/dashboard">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Bảng điều khiển</span></a>
      </li>
      {/* Divider */}
    
      {/* Nav Item - Pages Collapse Menu */}
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
     
      {/* Nav Item - Charts */}
      <li className="nav-item">
        <a className="nav-link" href="/admin/blog">
          <i className="fas fa-fw fa-chart-area" />
          <span>Tin tức</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin/user">
          <i className="fas fa-fw fa-chart-area" />
          <span>Khách hàng</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin/menu">
          <i className="fas fa-fw fa-chart-area" />
          <span>Menu</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin/policy">
          <i className="fas fa-fw fa-chart-area" />
          <span>Chính sách</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin/slider">
          <i className="fas fa-fw fa-chart-area" />
          <span>Slider</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin/category">
          <i className="fas fa-fw fa-chart-area" />
          <span>Loại sản phẩm</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin/product">
          <i className="fas fa-fw fa-chart-area" />
          <span>Sản phẩm</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin/content">
          <i className="fas fa-fw fa-chart-area" />
          <span>Hỏi đáp</span></a>
      </li>
      {/* Nav Item - Tables */}
      <li className="nav-item">
        <a className="nav-link" href="/admin/brand">
          <i className="fas fa-fw fa-table" />
          <span>Thương hiệu</span></a>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
      {/* Sidebar Message */}
     
    </ul>
        )
    }
}
