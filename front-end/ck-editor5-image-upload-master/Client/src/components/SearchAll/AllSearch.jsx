import React, { Component } from 'react'
import ProductService from '../../services/Home/ProductService'
import CategoryComponent from '../Home/CategoryComponent'
import FooterComponent from '../Home/FooterComponent'
import HeaderComponent from '../Home/HeaderComponent'

export default class AllSearch extends Component {
   
    render() {
        return (
           <div>
             <HeaderComponent/>
             <FooterComponent/>
           </div>
        )
    }
}
