import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [isLoginView, setIsLoginView] = useState(true);

  // Refs for the first input in each form
  const loginInputRef = useRef(null);
  const signupInputRef = useRef(null);

  useEffect(() => {
    // Focus the first input when the form view changes
    if (isLoginView) {
      loginInputRef.current.focus();
    } else {
      signupInputRef.current.focus();
    }
  }, [isLoginView]); // Dependency array includes isLoginView to trigger effect when it changes

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  const loginForm = (
    <div className="Login">
      <form onSubmit={handleSubmit} className="login__form">
        <h2 className="title" id='login'><img className= 'logo' src="https://ewh.ieee.org/r3/orlando/images/hp/UCF.jpg" alt="UCF Logo" />Login<img className= 'logo' src="https://ewh.ieee.org/r3/orlando/images/hp/UCF.jpg" alt="UCF Logo" /></h2>
        <div className="form--group">
          <label htmlFor="username" className="label">UserName:</label>
          <input 
            ref={loginInputRef} // Using ref for autofocus
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form--group">
          <label htmlFor="password" className="label">Password:</label>
          <input 
            type="password" 
            className="input" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="submit--button" type="submit">Login</button>
        <p className='links'><a onClick={toggleView}>Do not have an account?</a></p>
        <p className='links'><a onClick={toggleView}>Forgot Password?</a></p>
      </form>
    </div>
  );

  const signupForm = (
    <div className="signup">
      <form onSubmit={handleSubmit} className="signup__form">
        <h2 className="title"><img className= 'logo' src="https://ewh.ieee.org/r3/orlando/images/hp/UCF.jpg" alt="UCF Logo" />Create Account<img className= 'logo' src="https://ewh.ieee.org/r3/orlando/images/hp/UCF.jpg" alt="UCF Logo" /></h2>
        <div className="form--group">
          <label htmlFor="email" className="label">Email:</label>
          <input 
            ref={signupInputRef} // Using ref for autofocus
            type="email"
            className="input"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form--group">
          <label htmlFor="username" className="label">UserName:</label>
          <input 
            type="text" 
            className="input" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form--group">
          <label htmlFor="password" className="label">Password:</label>
          <input 
            type="password" 
            className="input" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form--group">
          <label htmlFor="confirmPassword" className="label">Confirm Password:</label>
          <input 
            type="password" 
            className="input" 
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
        </div>
        <button className="submit--button" type="submit">SignUp</button>
        <p className='links'><a onClick={toggleView}>Already have an account?</a></p>
      </form>
    </div>
  );

  return (
    <div className="app">
      {isLoginView ? loginForm : signupForm}
    </div>
  );
};

export default App;
