import React, { Component } from 'react';
import logo_header from './img/logo.png';
import Product from './component/Product';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <header className="App-header">
        <div class="logo">
          <img src={logo_header} alt="logo"/>
        </div>
        </header>
        <body className="container">
          <Product />
        </body>
      </div>
    );
  }
}

export default App;
