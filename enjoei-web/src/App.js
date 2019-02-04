import React, { Component } from 'react';
import logo_header from './img/logo.png';
import Product from './component/Product';
import Checkout from './component/Checkout';
import { getCheckout, postCheckout } from './service/rest';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleGetCheckout = this.handleGetCheckout.bind(this);
    this.handlePostCheckout = this.handlePostCheckout.bind(this);
  }
  
  async handleGetCheckout(checkoutId, couponId) {
    const checkout = await getCheckout(checkoutId, couponId);
      this.setState({ ...checkout });
  }
  
  handlePostCheckout(checkoutId) {
    return postCheckout(checkoutId);
  }

  async componentDidMount() {
    const checkoutId = Math.ceil(Math.random() * 50);
    await this.handleGetCheckout(checkoutId);
  }

  render() {
    if (this.state && !this.state.error) {
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
            handleGetCheckout={this.handleGetCheckout}
            handlePostCheckout={this.handlePostCheckout}
            product={this.state.product}
            {...this.state.checkout}/>
        </main>
      </div>
    );
  } else if (this.state && this.state.error) {
      return <div className="warning">{this.state.error}</div>
    } else {
      return <div className="loading">loading...</div>;
    }
  }
}

export default App;
