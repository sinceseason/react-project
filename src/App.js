import React, { Component } from 'react';
import { Routes } from './router/routers';
import 'reflect-metadata';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

export default App;
