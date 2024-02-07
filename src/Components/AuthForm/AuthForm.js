import React, { useState } from "react";
import "./AuthForm.css";
export const AuthForm = (props) => {
  const [authState, setAuthState] = useState("Login");
  return (
    <div className="authContainer">
      <div className="authContainerLeft">
        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/illustrated.webp" />
        <div className="prepbytesAchievementsContainer">
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/logo.webp"
            className="prepbytesIcon"
          />
          <div className="prepbytesAchievementsChild">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/students.webp" />
            <div className="prepbytesAchievementsChildDetails">
              <p className="prepbytesAchievementsChildCount">10K+</p>
              <p>Studetnts Enrolled</p>
            </div>
          </div>
          <div className="prepbytesAchievementsChild">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/college.webp" />
            <div className="prepbytesAchievementsChildDetails">
              <p className="prepbytesAchievementsChildCount">1000+</p>
              <p>Reach in Colleges</p>
            </div>
          </div>
          <div className="prepbytesAchievementsChild">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/learning.webp" />
            <div className="prepbytesAchievementsChildDetails">
              <p className="prepbytesAchievementsChildCount">1000+</p>
              <p>Reach in Colleges</p>
            </div>
          </div>
          <div className="prepbytesAchievementsChild">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/social.webp" />
            <div className="prepbytesAchievementsChildDetails">
              <p className="prepbytesAchievementsChildCount">150K+</p>
              <p>Social Community</p>
            </div>
          </div>
        </div>
      </div>
      <div className="authContainerRight">
        <div className="authFormInput">
          <div className="authHeading">
            <p onClick={() => setAuthState("Register")}>SIGN UP</p>
            <p onClick={() => setAuthState("Login")}>LOGIN</p>
          </div>
          <hr style={{ color: "black" }} />
          {authState === "Login" ? (
            <p className="authTitle">Sign in to your account</p>
          ) : (
            <p className="authTitle"> Create your new account</p>
          )}
          <h4>Email</h4>
          <input type="email" name="email" />
          <h4>Password</h4>
          <input type="password" name="password" />
          <h4>Phone no</h4>
          <input type="number" name="pnumber" />
          {authState === "Login" ? <p>Forgot your password?</p> : null}
          <button className="authButtons" style={{ marginBottom: "10px" }}>
            SIGN IN
          </button>
          <button className="authButtons">LOGIN VIA OTP</button>
        </div>
      </div>
    </div>
  );
};
