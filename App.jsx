import React, { useState } from 'react'

function calculator() {
  const [num1,setNum1]=useState("")
  const [num2,setNum2]=useState("")

  const a=Number(num1);
  const b=Number(num2);
  return (
    <div>
     <h1 style={{textDecoration:"underline"}}>calculator</h1>
     <input type="number" 
     placeholder='Enter the first value'
     onChange={(e)=>setNum1(e.target.value)}/>
     <input type="number"
      placeholder='Enter the second value' 
      onChange={(e)=>setNum2(e.target.value)}/>
     <div style={{height:"200px",
      width:"300px",
      border:"3px inset balck",
      marginLeft:"530px",
      marginTop:"20px",
      backgroundColor:"lightblue"}}>
        <h3>Result :</h3>
        <p><strong>Addition:</strong>{a+b}</p>
        <p><strong>Subtraction:</strong>{a-b}</p>
        <p><strong>Multiplication:</strong>{a*b}</p>
        <p><strong>Division:</strong>{b==0 ?"can't divided by zero":a/b}</p>

     </div>
    </div>
  )
}

export default calculator