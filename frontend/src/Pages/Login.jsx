import React, { useState } from 'react';
import './CSS/Login.css';

const Login = () => {
  const [state, setState] = useState("Login");
  const[formdata,setFormdata] = useState({
    username:"",
    password:"",
    email:""
  });
  const changehandler = (e) =>{
       setFormdata({...formdata,[e.target.name]:e.target.value})
  }
const signin = async ()=>{
console.log("sign in", formdata);
let responceData;
await fetch('http://localhost:4000/login',{
  method:'POST',
  headers:{
    Accept:'application/form-data',
    'Content-Type':'application/json'
  },
  body: JSON.stringify(formdata),
}).then((responce)=> responce.json()).then((data)=>responceData=data)
if(responceData.success){
  localStorage.setItem('auth-token',responceData.token);
  window.location.replace('/')
}
else{
  alert(responceData.errors)
}
}
const signup = async ()=>{
  console.log("sign up", formdata);
  let responceData;
  await fetch('http://localhost:4000/signup',{
    method:'POST',
    headers:{
      Accept:'application/form-data',
      'Content-Type':'application/json'
    },
    body: JSON.stringify(formdata),
  }).then((responce)=> responce.json()).then((data)=>responceData=data)
  if(responceData.success){
    localStorage.setItem('auth-token',responceData.token);
    window.location.replace('/')
  }
  else{
    alert(responceData.errors)
  }
}

  return (
    <div className='login'>
      <div className="login-container">
        <h1>{state}</h1>
        <div className="login-fields">
          {state === "Sign Up" ? <input type='text' name='username' value={formdata.username} onChange={changehandler} placeholder='Your Name' /> : <></>}
          <input type='email' name='email' value={formdata.email} onChange={changehandler} placeholder='Email Address' />
          <input type='password' name='password' value={formdata.password} onChange={changehandler} placeholder='Password' />
        </div>
        <button onClick={()=>{state==="Login"?signin():signup()}}>Continue</button>
        {state==="Sign Up"
        ?<p className='login-login'>Already have an account? <span style={{cursor:"pointer"}} onClick={()=>{setState("Login")}}>Login here</span></p>
  :<p className='login-login'>Create an account <span style={{cursor:"pointer"}} onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
        
        <div className="login-agree">
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
