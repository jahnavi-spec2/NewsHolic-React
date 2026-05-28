
// THIS NEW PROJECT IS BASED ON CLASS BASED PROTOTYPES...EARLIER WAS FNC BASED PROTOTYPE
import logo from './logo.svg';
import './App.css';
import News from './Components/News';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
export default class App extends Component {
  c="Jahnavi"
  render() {
    return (
      <div>
      <NavBar/>
      <News pageSize={5} country = "us" />
      </div>
      
    )
  }
}

