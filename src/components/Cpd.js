import React, {Component} from 'react'
import Arena from './Arena'
import NewCp from './NewCp'
import axios from 'axios'
// import FightResult from './FightResult';

class Cpd extends Component {
  constructor() {
    super();
    this.state = {
      cp: [],
      edit: false,
      id: null
    }
    // this.moveCp = this.moveCp.bind(this)
    this.handleRefresh = this.handleRefresh.bind(this)
    this.refreshCp = this.refreshCp.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.onSubmit = this.onSubmit.bind(this)
    this.update = this.update.bind(this)
    this.editToggle = this.editToggle.bind(this)


  }
   componentDidMount() {
   this.refreshCp()
  }

  refreshCp() { 
  axios.get('/api/councilperson')
.then(response => 
    this.setState({ cp: response.data })
)
.catch(error => console.log(error))
  }

  // moveCp() {
  //     axios.post(`/api/councilperson`, { 
  //       name: this.state.cp.name,
  //       age: this.state.cp.age
  //     })
  //   .then(response => {
  //     this.setState({ cp: response.data})
  //   })
  //   .catch(error => console.log(error))
  // }  

  handleRefresh = () => {
    this.setState({});
  };

  update(name, age) {
    // e.preventDefault();
    let id = this.state.id
    const editCp = {
        name,
        age
    }
    axios.put(`/api/councilperson/${id}`, editCp)
    .then(res => this.setState({ cp: res.data }));
    this.setState({ edit: false })
}
  editToggle(personId) {
    this.setState({ edit:true, id: personId })
  }


  render() {
    const cpList = this.state.cp.map((cps, i) => (
      <div>
      <li key={cps.id}>{cps.name}, {cps.age}</li>
      <button onClick={() => this.editToggle(cps.id)}>Edit</button>
      </div>))
      // const cpListTwo = this.state.cp.map((cps, i) => (
      // <li key={cps.id}>{cps.name}, {cps.age}</li>))
   
      return (
        <div>
        <h2>Councilpeople</h2>
        <h3>{cpList}</h3>
       
        <NewCp 
        edit={this.state.edit}
        update={this.update}
        handleSubmit={this.handleSubmit}
        moveCp={this.moveCp} 
        onSubmit={this.refreshCp}
        handleRefresh={this.handleRefresh}
        onClick={this.onSubmit} />
        {/* <Arena cpList={cpList} cpListTwo={cpListTwo} /> */}
        </div>
    )
  }
}

export default Cpd;