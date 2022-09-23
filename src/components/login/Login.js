import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div>
        <div className="login-title">
          <p>Login As_User</p>
          <div className="border-row"></div>
        </div>
        <div className="login-wraper">
          <div className="login-form">
            <form className="form-wraper">
              <div className="input-container">
                <p>Email/Username</p>
                <input name="name" type="text" placeholder="User@gmail.com" />
              </div>
              <div className="input-container">
                <p>Password</p>
                <input name="name" placeholder="Password" type="password" />
              </div>
              <div className="form-remenber">
                <div className="rember-me">
                  <input type="checkbox" id="remeber" />
                  <label for="remeber">Remember Me</label>
                </div>
                <div className="login-forget-pass">
                  <p>Forgot your password ?</p>
                </div>
              </div>
              <div className="login-button">
                <button>Login</button>
              </div>
              <div
                style={{
                  width: "100%",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                You don't have an account ?{" "}
                <span className="create-account-span">Create Account</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
