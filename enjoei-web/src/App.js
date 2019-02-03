import React, { Component } from 'react';
import logo_header from './img/logo.png';
import Product from './component/Product';
import Checkout from './component/Checkout';

import './App.css';

const data = {
  product: {
    id: 1321,
    title: "vestido floral",
    price: 100,
    image: "https://res-5.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_398,q_70,w_375/qzancxcixtocajlrgztv.jpg" 
  },  
  checkout: {    
    id: 6544,
    productId: 1321,
    shippingPrice: 20,
    availableCoupons: [
      {
        id: 3,
        title: "black friday",
        discount: 35
      }
    ],
    totalPrice: 120
  }
};


class App extends Component {
  constructor(props){
    super(props)
    this.state = { ...data };
  }

  render() {
    return (
      <div className="App-container">
        <header className="App-header">
          <div className="logo">
            <img src={logo_header} alt="logo"/>
          </div>
        </header>
        <main className="cost-container">
          <Product {...this.state.product}/>
          <Checkout 
            price={this.state.product.price}
            {...this.state.checkout}/>
        </main>
      </div>
    );
  }
}

export default App;
