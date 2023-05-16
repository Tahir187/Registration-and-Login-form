import React from "react";

const Login = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <div className="mainContainer">
        <div className="imageContainer">
          <img
            src="../src/assets/login.png"
            alt="Login image for registration"
            className="image"
          />
        </div>
        <div className="formContainer">
          <form action="submit-form" method="POST" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              id="pasword"
              pattern=".{8,}"
              title="Password must be 8 characters"
              placeholder="Password"
              required
            />
            <button type="submit">Submit</button>
            <div className="login">
              <p>
                If you are new create account <a href="">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
