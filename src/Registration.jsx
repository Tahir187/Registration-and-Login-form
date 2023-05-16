import React from "react";
import { Link } from "react-router-dom";
import "./registration.css";
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Typography,
} from "@mui/material";
import { LockOutlined, Email, Lock, Person } from "@mui/icons-material";

const Registration = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <div className="mainContainer">
        <div className="imageContainer">
          <img
            src="../src/assets/Rectangle 1.png"
            alt="hiking image for registration"
            className="image"
          />
        </div>
        <div className="formContainer">
          <form action="submit-form" method="POST" onSubmit={handleSubmit}>
            <div className="heading">
              <Avatar>
                <LockOutlined />
              </Avatar>
              <Typography component="h2" variant="h5">
                Register
              </Typography>
            </div>
            <div>
              <Person />
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First name"
                required
              />
            </div>
            <div>
              <Person />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last name"
                required
              />
            </div>
            <div>
              <Email />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <Lock />
              <input
                type="password"
                name="password"
                id="password"
                pattern=".{8,}"
                title="Password must be 8 characters"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit">
              <Typography variant="button">Submit</Typography>
            </button>
            <div className="login">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
