import React, { Component } from 'react';
import UserList from './UserList';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <div className="App">
      
      <UserList/>
 

      </div>
    );
  }
}

export default App;
