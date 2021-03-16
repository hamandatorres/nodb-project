import React, { Component } from "react";
import axios from 'axios';



export default function NewCp(props) {

  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  // const [nameTwo, setNameTwo] = React.useState("");
  // const [ageTwo, setAgeTwo] = React.useState("");
  
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
   
    })
    .catch(error => console.log(error))
    event.preventDefault();
  }
  

  return (
    <div>
    <form className="form" onSubmit={ props.edit === true ? () => props.update(name, age) : handleSubmit }>
      <h3>Submit Council Person</h3>
      <label>
        Name
        <br />
        <input
          name="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          />
      </label>
      <br />
      <label>
        Age
        <br /> 
        <input
          name="age"
          type="number"
          value={age}
          onChange={e => setAge(e.target.value)}
           />
      </label>
      <br></br>
      <button className="submitbutton" onClick={props.handleRefresh}>Submit</button>
      {/* <button className="updatebutton" onClick={props.update} onClick={props.handleRefresh}>
        Update
      </button> */}
    </form>
    

    {/* <form className="form" onSubmit={handleSubmit}>
      <h3>Edit Council Person</h3>
      <label>
        Name
        <br />
        <input
          name="name"
          type="text"
          value={nameTwo}
          update={props.update}
          onChange={e => setNameTwo(e.target.value)}
          required />
      </label>
      <br />
      <label>
        Age
        <br /> 
        <input
          name="age"
          type="number"
          value={ageTwo}
          update={props.update}
          onChange={e => setAgeTwo(e.target.value)}
          required />
      </label>
      <br></br>
      <button className="submitbutton" onClick={props.handleRefresh}>Submit</button>
    </form> */}
    </div>
  );
}
