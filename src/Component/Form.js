import React, { useState } from "react";
import googleLogo from "./googleLogo.png";
import facebookLogo from "./facebookLogo.png";


const Form=()=>{
  let [name,setName]=useState("");
  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");
  let [confirmPassword,setConfirmPassword] = useState("");
  let [error,setError] = useState("");
  let [success,setSuccess] = useState("");
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  let validation=()=>{
    if(name===""||email===""||password===""||confirmPassword===""){
      setError("Error : All the fields are mandatory");
      return;
    }
    else if(!isValidEmail(email.trim())) {
      setError("Please enter a valid email");
      return;
    }
    else if(password.trim()!==confirmPassword.trim()){
      setError("Error: Please Make sure your passwords and confirm passwords match!");
      return;
    }
    else{
      setError('');
      setSuccess("Successfully Signed Up!");
    }
    console.log("Successfully Signed Up!");
    setTimeout(function() {
      window.location.reload();
    }, 2000);
  }
  return(
    <div className="signup-form">
    <div className='heading'>Create Account</div>
    <div className="signup-links">
      <div className="google-link">
        <img className="logos" src={googleLogo}/>
        <div>Sign up with Google</div>
      </div>
      <div className="fb-link">
      <img className="logos" src={facebookLogo}/>
        <div>Sign up with Facebook</div>
      </div>
    </div>
    <div className="or-div">- OR -</div>
    <div className="input-field">
      <input type='text' id='name' placeholder='Full Name' onChange={(e)=>setName(e.target.value)}></input>
      <input type='email' id='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input>
      <input type='password' id='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
      <input type='password' id='confirm-password' placeholder='Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)}></input>
    </div>
    {error && <div className='error'>{error}</div>}
    {success && <div className='success'>{success}</div>}
    <button onClick={validation}>Create Account</button>
  </div>
  );
};
export default Form;