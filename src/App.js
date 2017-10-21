import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Text,TouchableOpacity} from 'react';
class App extends Component {
  render() {
    return (
    
                <div className="App">
                       <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                                    <h1 className="App-title">Welcome to React</h1>
                        </header>
                              <p className="App-intro">
                                     รหัสนิสิต: 57021500  ชื่อ: นางสาวกัญญาณัฐ นามสกุล: สัจจะดิระภักดิ์
                              </p>
               </div>

    );
  }
}

export default App;
