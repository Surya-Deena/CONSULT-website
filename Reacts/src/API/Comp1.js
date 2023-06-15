import React from "react";
import { Axios } from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Comp1() {
    const [records, setRecords] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((val) => val.json())
  //       .then((data) => setRecords(data))
  //       .catch(err=>console.log(err));
  //   }, []);
useEffect( () => {
    fetch("https://official-joke-api.appspot.com/jokes/ten").then(data=>setRecords(data))
  },[])

  return (
    <div>
      <ul>
            {records.map((item)=>(
                <li >{item.type} | {item.url} </li>
            )
            )} 
        </ul>
     {/* <button onClick={validate}>log</button> */}
    </div>
  );
}

export default Comp1;
