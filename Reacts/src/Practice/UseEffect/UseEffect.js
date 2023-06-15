import React,{useEffect,useState} from 'react'

function UseEffect() {
    const [count,setCount]=useState(0)
    const [msg,setMsg]=useState("initial message");
    let x=0;

    useEffect(()=>{
        console.log("UseEffect Hook");
        console.log("message is : ",msg);
        console.log("count value is : ",count);
    })
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>count</button>
        <p>count value is : {count} </p>
        <button onClick={()=>setMsg("new messages "+(x++))}>msg</button>
        <p>Msg  is : {msg} </p>
    </div>
  )
}

export default UseEffect