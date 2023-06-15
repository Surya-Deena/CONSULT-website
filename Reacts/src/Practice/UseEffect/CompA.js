import React,{useEffect} from 'react'

function CompA() {
    useEffect(()=>{
       const tym= setInterval(()=>console.log("UseEffect 2sec interval"),2000);
        return ()=>{
            clearInterval(tym)
        }
    },[])
  return (
    <div>
        <p>CompA</p>
        <hr/>
    </div>
  )
}

export default CompA