
import React, { Component } from 'react';
import '../css/Coupon.css';

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
                        <li>
                            <input type="radio" id="test2" name="radio-group" />
                            <label for="test2">não usar cupom</label>                        
                        </li>
                        <li>
                            <input type="radio" id="test3" name="radio-group" />
                            <label for="test3">black friday</label>                        
                        </li>

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
