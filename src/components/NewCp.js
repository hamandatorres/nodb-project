import React, { Component } from "react";


export default function NewCp(props) {

  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");

 

  const handleSubmit = (event) => {
    console.log(`
      Name: ${name}
      Age: ${age}
      `);
    event.preventDefault();
    props.moveCp(event)
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
