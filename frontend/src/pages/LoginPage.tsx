import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

export const LoginPage = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="Auth-form-container style">
      <form className="login-form Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h1 className="Auth-form-title">Login</h1>
          <div className="form-group mt-3">
            <label htmlFor="email">Email</label>
            <input
              type={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@email.com"
              className="form-control mt-1"
              id="email"
              name="email"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              type={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mt-1"
              placeholder="********"
              id="password"
              name="password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="funbutton">Login</button>
          </div>
          <button
            className="funbutton link-btn"
            onClick={() => navigate("/register")}
          >
            Don't have an account? Register here.
          </button>
        </div>
      </form>
    </div>
  );
};
