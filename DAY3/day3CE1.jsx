import React, { useState } from 'react'

function Day3() {
  const [butt,setbutt]=useState(false);
    function Toggle()
    {
           setbutt(!butt);
    }
  return (
    <div>
       
        <button onClick={Toggle}>{butt ? "Hide Component" : "Show Component"}</button>
      
       { butt &&
        <h1>Hi! How are You!!!</h1>
       }
    </div>
  )
}

export default Day3;