import React from 'react'
import './CSS/Loginsignup.css'
const LoginSignup = () => {
  return (
    <div className='login-signup'>
    <div className='loginsignup-container'>
    <h1>Signup</h1>
    <div className='loginsignup-fields'>
      <input type='text' placeholder='Your Name'/>
      <input type='email' placeholder='Email Address'/>
      <input type='password' placeholder='password'/>
      <button>Continue</button>
    </div>
   
    <p className='loginsignup-login'>
    Already have an Account? <span>Login</span>
    </p>
    <div className='loginsignup-agree'>
    <input type='checkbox' name='' id=''/>
    <p>By Continuing, i agree to the terms of use & privacy policy</p>
    </div>
    </div>
    </div>
  )
}

export default LoginSignup