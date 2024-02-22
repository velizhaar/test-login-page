import React, { useEffect, useState } from 'react';
import classes from './TestLoginDesktop.module.css';
import eyeOpenIcon from "./icon/eyeopen.png"
import eyeCloseIcon from "./icon/eyeclose.png"
import resets from './_resets.module.css'
export default function TestLogin() {
  const emailValid = (string) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(string)
  const [state, setState] = useState({
    email: "",
    password: "",
    remember: false,
    eyeOpen: false,
    isLoading: false
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })


  const handleChange = (event) => {
    const { name, value } = event.target
    console.log("name", name, "value", value)
    handleValidation(name, value)
  };
  const handleChecked = (event) => {
    const { name, checked } = event.target
    setState({ ...state, [name]: checked })
  };
  const handleValidation = (name, value) => {
    switch (name) {
      case "email":
        if (!value || value.length === 0) {
          setErrors({...errors, email: "Email harus diisi"})
        } else if (!emailValid(value)) {
          setErrors({...errors, email: "Email tidak valid"})
        } else {
          setErrors({...errors, email: ""})
        }
      break
      case "password":
        if (!value || value.length === 0) {
          setErrors({...errors, password: "Password harus diisi"})
        } else {
          setErrors({...errors, password: ""})
        }
        break
        default:
          break
          
        }
        setState({ ...state, [name]: value })
  }
  const handleLogin = () => {
    if (handleValidation("email", state.email)&& handleValidation("password", state.password)) {
      console.log("login success", errors)
    }
    setState({...state, isLoading: true})
  }
  if (state.isLoading) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
    <div className={classes.imagePurple}></div>
    <div className={classes.loginContainer}>
      <div className={classes.imageLogin}></div>
      <div className={classes.frameLogin}>
        <div className={classes.loginText}>Login</div>
        <div className={classes.loginForm}>
          <div className={classes.email}>
            <div className={classes.emailTitle}>Email</div>
            <input className={classes.emailInput} type='email' id='email' onBlur={() => handleValidation("email", state.email)} name='email' value={state?.email} onChange={handleChange}/>
            {errors?.email !== "" &&
            <span style={{color: "red"}}>{errors.email}</span>
            }
          </div>
          <div className={classes.password}>
            <div className={classes.passwordTitle}>Password</div>
            <div className={classes.passwordContainer}>
            <input className={classes.passwordInput} type={state.eyeOpen? 'text' :'password'} onBlur={() => handleValidation("password", state.password)} id='password' name='password' value={state?.password} onChange={handleChange}/>
            <img alt='eyeIcon' src={state.eyeOpen? eyeCloseIcon : eyeOpenIcon} onClick={() => setState({...state, eyeOpen: !state.eyeOpen})}/>
            </div>
            {errors?.password !== "" &&
            <span style={{color: "red"}}>{errors.password}</span>
            }
          </div>
          <div className={classes.rememberContainer}>
            <div className={classes.remember}>
              <div className={classes.checkBoxDefault}>
                <input type='checkbox' className={classes.checkBoxDefault} name="remember" id='remember' checked={state?.remember} onChange={handleChecked}/>
              </div>
              <div className={classes.rememberMe}>Remember me</div>
            </div>
            <div className={classes.forgotPassword}>Forgot password?</div>
          </div>
          <div className={classes.buttonLoginContainer}>
            <button className={classes.buttonLogin} onClick={handleLogin}>
              <div className={classes.login}>Login</div>
            </button>
            <button className={classes.buttonSignUp}>
              <div className={classes.signUp}>Sign Up</div>
            </button>
          </div>
        </div>
        <div className={classes.containerAlternative}>
          <div className={classes.orLoginWith}>Or, login with</div>
          <div className={classes.containerAlternativeButton}>
            <button className={classes.buttonFacebook}>
              <div className={classes.facebook}>Facebook</div>
            </button>
            <button className={classes.buttonLinkedIn}>
              <div className={classes.linkedIn}>Linked In</div>
            </button>
            <button className={classes.buttonGoogle}>
              <div className={classes.google}>Google</div>
            </button>
          </div>
        </div>
      </div>
      <div className={classes.frame27}>
        <div className={classes.hello}>Hello</div>
        <div className={classes.enterYourEmailAndPasswordToLog}>Enter your email and password to login.</div>
      </div>
    </div>
    <div className={classes.briefText}>
      <div className={classes.frameBriefText}></div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </div>
      <div className={classes.loremIpsumDolorSiAmet}>
        <div className={classes.textBlock}>Lorem ipsum <br/>dolor si <br/>amet </div>
      </div>
      <div className={classes.consectetur}>consectetur</div>
    </div>
  </div>
  )
}