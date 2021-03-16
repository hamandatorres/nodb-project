import React, {Component} from 'react'
// import logo from './logo.svg';
// import axios from 'axios'
import Cpd from './components/Cpd'
// import Arena from './components/Arena'
import FightResult from './components/FightResult'
import './App.css';

export default class App extends Component  {
 
  
render() {
  return (
    <div className="App">
      <h1>BudgetTalk</h1>
      <Cpd className="cpd"/>
      {/* <Arena className="arena" /> */}
     
    </div>
  );
}
}


