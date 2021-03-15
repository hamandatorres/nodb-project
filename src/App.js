import React, {Component} from 'react'
// import logo from './logo.svg';
import axios from 'axios'
import Cpd from './components/Cpd'
import './App.css';
// import { getCp } from '../server/controllers/controllers';

export default class App extends Component  {
  // constructor() {
  //   super();
  //   this.state = {
  //     cp: []
  //   }
  // }
//    // this.setState = ({ this.arenaCp: this.props.moveCP})
   componentDidMount() {
    // this.getCp();
    // console.log(this.state.cp)
      axios.get('/api/councilperson')
    .then(response => {
        this.setState({ arenaCp: response.data })
    })
    .catch(error => console.log(error))
  }

  
render() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Cpd />
    </div>
  );
}
}


