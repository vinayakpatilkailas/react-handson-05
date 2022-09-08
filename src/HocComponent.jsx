 import React, { useState } from "react";

const HOC = ()  => {
    let [count,setCount] = useState(0);
     const Click =() =>{
setCount(count => count+1)
     }
    return(
        <>
        <p>Counter Update:{count}</p>

        <button onClick={Click}>Click Me</button>
        </>
    )
}


export default HOC;