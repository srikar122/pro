import React from 'react'
import '../styles/SignUp.css'
import login_img from '../images/login_img.svg'
function SignUp() {
  return (
    <div className="signUp">
        <div className="signUp-left">
            <img src={login_img} alt="" />
        </div>
        <div className="signUp-right">
            <div className="signUp-inner">
                <h1 className='signUp-form-head'>signUp</h1>
                <form className='signUp-form' action="">
                    <input className='signUp-input' type="email" id='mail' placeholder="Email/UserName"/>
                    <input className='signUp-input' type="password" id='pass' placeholder="Password"/>
                    <button className='signUp-button' type='submit'>signUp</button>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default SignUp