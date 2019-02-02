import React, { Component } from 'react';
import logo_header from './img/logo.png';
import Product from './component/Product';
import Button from './component/Button';
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
        <main className="cost-container">
          <Product />
        </main>
        <footer className="app-footer">
          <div className="button-cancel">
            <Button />
          </div>
          <div className="button-confirm">
            <Button />
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
