import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { checkValidData } from "../../utils/validate";
import "./styles.css";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const email = useRef(null);
  const password = useRef(null);

  const toggleForm = () => setIsSignInForm(!isSignInForm);

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    message === null ? toast.success("Welcome User") : toast.error(message);
  };

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
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="input"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="input"
        />
        <button className="button" onClick={() => handleButtonClick()}>
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
