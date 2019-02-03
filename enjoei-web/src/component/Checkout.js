
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Button from './Button'
import '../css/Button.css';
import Modal from './Modal'
import '../css/Coupon.css';
import '../css/Product.css';

const calcDiscount = (value, discount) =>
    value - discount;

class Checkout extends Component {
    constructor(props){
        super(props);
        this.state = { 
            showModal: false,
            useCoupon: false,
            calcTotalPrice: props.totalPrice 
        }

        this.handleCancel = this.handleCancel.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleCoupon = this.handleCoupon.bind(this);
    }

    handleCancel () {
        this.setState({ showModal: true, message: "cancel" });
    }

    handleConfirm () {
        this.setState({ showModal: true, message: "confirm" });
    }
    
          
    handleCloseModal () {
        this.setState({ showModal: false });
    }

    handleCoupon (ev, coupon) {
        const discount = coupon ? coupon.discount : 0;
        const tPrice = calcDiscount(this.props.totalPrice, discount)
        this.setState({ 
            calcTotalPrice: tPrice,
            useCoupon: !!coupon
        })
    }

    render() {
        return (
            <div>
                <Modal 
                    open={this.state.showModal}
                    handleCloseModal={this.handleCloseModal}
                    message={this.state.message}
                />
                    
                <div className="coupon-product">
                    <div className="coupon-title">
                    <ul>
                        <li>cupom</li>
                        </ul>
                    </div>
                    <div className="coupon-label">
                        <ul>
                            <li>
                                <input 
                                    type="radio" 
                                    id="coupon-no" 
                                    checked={!this.state.useCoupon}
                                    onChange={this.handleCoupon} 
                                    name="radio-group" />
                                <label htmlFor="coupon-no">não usar cupom</label>                        
                            </li>
                            {
                                this.props.availableCoupons.map(coupon => 
                                    <li key={coupon.id}>
                                        <input type="radio" onChange={(e) => this.handleCoupon(e, coupon)} id={`coupon-${coupon.id}`} name="radio-group" />
                                        <label htmlFor={`coupon-${coupon.id}`} >{coupon.title}</label>                        
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="coupon-valule">
                        <ul>
                            {
                                this.props.availableCoupons.map(coupon => 
                                    <li key={coupon.id}>
                                        - R${coupon.discount}
                                    </li>
                                )
                            }
                        </ul>
                    </div>            
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
                            <li>R$ {this.props.price}</li>
                            {
                                
                                this.props.availableCoupons.map(coupon => 
                                    <li key={coupon.id}>
                                        - R$ {coupon.discount}
                                    </li>
                                )
                            }
                            <li>R$ {this.props.shippingPrice}</li>
                            <li>R$ {this.state.calcTotalPrice}</li>
                        </ul>
                    
                    </div>            
                </div>  

                <div className="app-footer">
                    <div className="button-cancel">
                        <button onClick={this.handleCancel}>cancelar</button>
                    </div>
                    <div className="button-confirm">
                        <button onClick={this.handleConfirm}>confirmar</button>
                    </div>            
                </div>             
            </div>    
        );
    }
}

Checkout.propTypes = {
    id: PropTypes.number.isRequired,
    productId: PropTypes.number.isRequired,
    shippingPrice: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    availableCoupons: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
}
export default Checkout;
