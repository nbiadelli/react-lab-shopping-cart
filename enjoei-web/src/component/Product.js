import React, { Component } from 'react';
import img_product from '../img/product.png'
import Coupon from './Coupon';
import '../css/Product.css';



class Product extends Component {
  render() {
    return (
        <div className="main">
            <div className="img-product">
                <img src={img_product} alt="imag"/>
            </div> 
            <div>
                <Coupon />
            </div> 
            <div className="cost-product">
                <div className="cost-title">
                   <ul>
                       <li>resumo</li>
                    </ul>
                </div>
                <div className="cost-label">
                    <ul>
                        <li>valor original</li>
                        <li>cupom</li>
                        <li>frete</li>
                        <li>total</li>
                    </ul>
                </div>
                <div className="cost-valule">
                    <ul>
                        <li>R$100,00</li>
                        <li>R$100,00</li>
                        <li>R$100,00</li>
                        <li>R$100,00</li>
                    </ul>
                
                </div>            
            </div>            

        </div>    
    );
  }
}

export default Product;
