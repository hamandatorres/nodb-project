
import React, { useState } from 'react'



// const arenaCp = <span>CP</span>

function Arena(props) {
const arenaCp = <span>{props.cpList}</span>
const arenaCpTwo = <span>{props.cpListTwo}</span>
const [block, setBlock ] = useState(1);
return(
  <div>
      <h2>Council Room</h2>
      <button onClick={() => {
        setBlock(block + 1);
      }}>
        Move
        </button>
      <div className="container">
      <h2 className="cp1">CP 1
        <p>{block === 1 && arenaCp}</p></h2>
      <h2 className="cp2">CP 2
        <p>{block === 2 && arenaCpTwo}</p>
      </h2>
      </div>
  
  </div>
)
}

export default Arena