import React,{useState} from 'react'
import CompA from './CompA'
import CompB from './CompB'

function Cleanup() {
    const [togg,setTogg]=useState(true)
  return (
    <>
        <button onClick={()=>setTogg(!togg)}>Show/hide</button>
        {togg?<CompA/>:null}
    </>
  );
}

export default Cleanup;