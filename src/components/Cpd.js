import React, {Component, useRef, useState} from 'react'
import Arena from './Arena'
import NewCp from './NewCp'
import axios from 'axios'
// import { response } from 'express';

class Cpd extends Component {
  constructor() {
    super();
    this.state = {
      cp: []
    }
    this.moveCp = this.moveCp.bind(this)
  }
//    // this.setState = ({ this.arenaCp: this.props.moveCP})
   componentDidMount() {
   this.refreshCp()
  }
  refreshCp () { 
  axios.get('/api/councilperson')
.then(response => {
    this.setState({ cp: response.data })
})
.catch(error => console.log(error))
  }
  moveCp(event) {
      axios.post(`/api/councilperson`, { cp: this.state.cp })
    .then(response => {
      this.setState({ cp: response.data})
      // const arenaCp = {...this.state.cp}
    })
    .catch(error => console.log(error))
  }  
  
  render() {
    const cpList = this.state.cp.map((cps, i) => (
      <li key={this.state.cp.id}>{this.state.cp[0].name}</li>))

      
      return (
        <div>
        <h2>Councilpeople</h2>
        <h3>{cpList}</h3>
        <NewCp moveCp={this.moveCp} />
        <button onClick={this.moveCp}>Move</button>
        <Arena />
        
        </div>
    )
  }
}
export default Cpd;