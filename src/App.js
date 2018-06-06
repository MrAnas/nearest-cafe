import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import Theme from './Theme'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  }
  
  render() {
    return (
      <div className="App">
      <Theme/>
        {/* <Map/> */}
      </div>
    );
  }
}

export default App;
