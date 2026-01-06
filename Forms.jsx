import React,{useState} from 'react'

function Forms() {
    const [Name,setName]=useState("")
    const [Email,setEmail]=useState("")
    const [password,setpassword]=useState("")
    const [SubmittedData,setSubmittedData]=useState(null)
       
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formdata={Name,Email,password}
        setSubmittedData(formdata);
        setName("")
        setEmail("")
        setpassword("")
    }
  return (
    <div>
        <h2>Form</h2>
        
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" 
            value={Name} 
            onChange={(e)=>setName(e.target.value)}/>
            
            <label>Email::</label>
            <input type="email"
            value={Email} 
            onChange={(e)=>setEmail(e.target.value)} />
            <label>Password:</label>
            <input type="password" 
            value={password} 
            onChange={(e)=>setpassword(e.target.value)}/>
            <button type='submit'>submit</button>
        </form>
        {SubmittedData &&(
            <div>
        <p><strong>Name:</strong>{SubmittedData.Name}</p>
        <p><strong>Email:</strong>{SubmittedData.Email}</p>
        <p><strong>password:</strong>{SubmittedData.password}</p>
    </div>
        )}
        </div>

  )
}

export default Forms