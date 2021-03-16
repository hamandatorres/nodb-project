import React, {Component, useRef, useState} from 'react'
import Arena from './Arena'
import NewCp from './NewCp'
import axios from 'axios'
// import { response } from 'express';

class Cpd extends Component {
  constructor() {
    super();
    this.state = {
      cp: [
      ]
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

  moveCp() {
    // const age = { age: this.state.cp };
    // const name = { name: this.state.cp };
      axios.post(`/api/councilperson`, { 
        name: this.state.cp.name,
        age: this.state.cp.age
      })
    .then(response => {
      this.setState({ cp: response.data})
      // const arenaCp = {...this.state.cp}
    })
    .catch(error => console.log(error))
  }  

  render() {
    const cpList = this.state.cp.map((cps, i) => (
      <li key={cps.id}>{cps.name}</li>))
      return (
        <div>
        <h2>Councilpeople</h2>
        <h3>{cpList}</h3>
        <NewCp 
        moveCp={this.moveCp} 
        onSubmit={this.refreshCp} />
        {/* <button onClick={this.moveCp}>Move</button> */}
        <Arena moveCp={this.moveCp}  />
        </div>
    )
  }
}

export default Cpd;