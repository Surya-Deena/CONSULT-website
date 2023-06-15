import React from 'react'
import { useState } from 'react'

function UseStates() {
  const [count,setCount]=useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count + 1)}>Add 1</button>
        <p>Count value is : {count} </p>
        <button onClick={()=>setCount(prevState=>prevState + 5)}>Add 5</button>
    </div>
  )
}

export default UseStates