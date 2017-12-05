import React, { Component } from 'react';
import './App.css';

class Module extends Component {
  render() {
    return (
      <div>
        <h1>Test {this.props.display}</h1>
      </div>
    );
  }
}

export default Module;
