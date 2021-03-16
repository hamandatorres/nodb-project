import React, { Component } from "react";
import axios from 'axios';


export default function NewCp(props) {

  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");

 

  const handleSubmit = (event) => {
    console.log(`
      Name: ${name}
      Age: ${age}
      `);
      axios.post(`/api/councilperson`, { 
        name:name,
        age:age
      })
    .then(response => {
      props.onSubmit()
      // this.setState({ cp: response.data})
      // const arenaCp = {...this.state.cp}
    })
    .catch(error => console.log(error))
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit Council Person</h3>
      <label>
        Name:
        <input
          name="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required />
      </label>
      <label>
        Age:
        <input
          name="age"
          type="number"
          value={age}
          onChange={e => setAge(e.target.value)}
          required />
      </label>
      <button>Submit</button>
    </form>
  );
}
