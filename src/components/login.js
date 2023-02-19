import React from 'react'
import '../styles/login.css'
import login_img from '../images/login_img.svg'
function login() {
  return (
    <div className="login">
        <div className="login-left">
            <img src={login_img} alt="" />
        </div>
        <div className="login-right">
            <div className="login-inner">
                <h1 className='login-form-head'>Login</h1>
                <form className='login-form' action="">
                    <input className='login-input' type="email" id='mail' placeholder="Email/UserName"/>
                    <input className='login-input' type="password" id='pass' placeholder="Password"/>
                    <button className='login-button' type='submit'>Login</button>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default login