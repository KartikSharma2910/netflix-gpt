import { signOut } from "firebase/auth";
import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import "./styles.css";

const Browse = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign out successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className="browseWrapper">
      <div className="browseImageWrapper">
        <img
          className="browseImage"
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          alt="logo"
        />
        <div className="signOutText" onClick={handleSignOut}>
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default Browse;
