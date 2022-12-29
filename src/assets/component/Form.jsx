import React from "react";
import "./Form.css";
import MyImage from "./img/img.jpg";

const Form = () => {
  return (
    <div className="container">
      <div className="form_wrapper">
        <div className="logo-wrap">
          <div></div>
          <h3>Untitled UI</h3>
        </div>

        <form action="">
          <div className="top_heading">
            <h1>Welcome back</h1>
            <p>Please enter your details</p>
          </div>
          <div className="input_wrap">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input_wrap">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="input_wrap checkbox_wrapper">
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember for 30 days</label>
            </div>
            <a>Forgot password</a>
          </div>
          <button className="signup_btn" type="submit">Sign up</button>
          <div className="signup_wrapper">
            <p>Don't have an account?</p>
            <a href="">Sign up</a>
          </div>
        </form>

        <p className="bottom-pera">Something there</p>
      </div>
      <div className="rightSideImage">
      </div>
    </div>
  );
};

export default Form;
