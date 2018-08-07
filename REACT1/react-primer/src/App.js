import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MyHeader} from "./MyHeader";
import {AddBox} from "./addBox";
import {SelectBox} from "./ResolveBox";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MyHeader/>
        <SelectBox/>
        
      </div>
    );
  }
}

export default App;
