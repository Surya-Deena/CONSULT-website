import React,{useRef,useEffect} from 'react';
import { useState } from 'react';

function UseRefs() {
    const colors=useRef(null);
    const col=["red","green","yellow","pink","black"];
    const sel=useRef(null)
    let x=10;


    useEffect(()=>{
        console.log(colors);
        console.log(colors.current);
        console.log("sel color with useEffect",x);
    });

    const style=()=>{
        const random=Math.floor(Math.random()*col.length);
        colors.current.style.color=col[random];
        sel.current=col[random];
        console.log("sel Color : ",sel.current);
    };

  return (
    <div>
        <button onClick={()=>x++} >button</button>
        <p ref={colors}>Welcome back</p>
    </div>
  )
}

export default UseRefs