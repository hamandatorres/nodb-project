
import React from 'react'

const Arena = (props) =>
  <div>
      <h2>Arena</h2>
      <button onClick={props.moveCp}>Move</button>
      <h2>CP 1
        <p>{props.moveCp}</p></h2>
      <h2>CP 2
        <p>{props.moveCp}</p>
      </h2>
      <button>Fight</button>
  </div>

export default Arena