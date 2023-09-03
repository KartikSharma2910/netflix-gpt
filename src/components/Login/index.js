import React, { useState } from "react";
import "./styles.css";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = () => setIsSignInForm(!isSignInForm);
  return (
    <div className="wrapper">
      <div className="imageWrapper">
        <img
          className="image"
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          alt="logo"
        />
      </div>
      <div className="formWrapper">
        <div className="formLabel">{isSignInForm ? "Sign In" : "Sign Up"}</div>
        {!isSignInForm && (
          <input type="text" placeholder="Name" className="input" />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="input"
        />
        <input type="password" placeholder="Password" className="input" />
        <button className="button">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="helpWrapper">
          <div className="remember">
            <input type="checkbox" className="checkbox" /> Remember me
          </div>
          <div className="help">Need help?</div>
        </div>
        {!isSignInForm ? (
          <div className="signUpWrap">
            Already a user?{" "}
            <span className="signUp" onClick={() => toggleForm()}>
              Sign in here
            </span>
          </div>
        ) : (
          <div className="signUpWrap">
            New to Netflix?{" "}
            <span className="signUp" onClick={() => toggleForm()}>
              Sign up now
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
