import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

function UseMemo() {
    const [count,setCount]=useState(0);
    const [num,setNum]=useState(1);

    const factFn=(n)=>{
        console.log("useMemo hook");
        let res=1;
        if(n<=1){
            return res;
        }else{
            for(let i=n;i>=1;i--){
                res=res*i;
            }
            return res;
        }
    }
const facts=useMemo(()=>factFn(num),[num]);

  return (
    <div>
        <h1>useState</h1>
       <button onClick={()=>{setCount(count + 1); console.log(count)}}>Add 1</button>
        <p>Count value is : {count} </p>
        <button onClick={()=>{setCount(prevState=>prevState + 5);console.log(count)}}>Add 5</button>
        <hr/>
        <h1>UseMemo</h1>
        <input type='text' onChange={(e)=>{setNum(e.target.value)}} />
        <button onClick={()=>console.log(facts )}>click</button>
        <p>num value is : {num} </p>
        <p>factorial  value is : {facts} </p>
    </div>
  )
}

export default UseMemo