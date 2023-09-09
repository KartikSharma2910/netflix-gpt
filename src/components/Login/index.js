import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { checkValidData } from "../../utils/validate";
import Skeleton from "../Skeleton";
import "./styles.css";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const toggleForm = () => setIsSignInForm(!isSignInForm);

  const handleButtonClick = () => {
    setLoading(true);
    // Validate the form data
    const message = checkValidData(email, password);
    if (message) {
      toast.error(message);
      setLoading(false); // Set loading to false when validation fails
      return;
    }

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // const user = userCredential.user;
          toast.success("Welcome " + name);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorCode + "-" + errorMessage);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // const user = userCredential.user;
          toast.success("Welcome " + name);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorCode + "-" + errorMessage);
        })
        .finally(() => {
          setLoading(false);
        });
    }
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
        {isSignInForm ? null : loading ? (
          <Skeleton />
        ) : (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="input"
          />
        )}

        {loading ? (
          <Skeleton />
        ) : (
          <input
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email or phone number"
            className="input"
          />
        )}
        {loading ? (
          <Skeleton />
        ) : (
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input"
          />
        )}
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
