
import React, { Component } from 'react';
import '../css/coupon.css';

class Coupon extends Component {
  render() {
    return (
        <div>
            <div className="coupon-product">
                <div className="coupon-title">
                   <ul>
                       <li>cupom</li>
                    </ul>
                </div>
                <div className="coupon-label">
                    <ul>
                        <li><input type="radio"/></li>
                        <li><input type="radio"/></li>
                    </ul>
                </div>
                <div className="coupon-valule">
                    <ul>
                        <li>-R$10,00</li>
                    </ul>
                
                </div>            
            </div>            

        </div>    
    );
  }
}

export default Coupon;
