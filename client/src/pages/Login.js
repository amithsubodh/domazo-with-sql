import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    const data = { username: username, password: password };
    axios
      .post("http://localhost:3001/signup/login", data)
      .then((response) => {
        if (response.data.success) {
          navigate("/");
          localStorage.setItem("username", username);
        } else {
          alert("Login failed");
        }
      })
      .catch((error) => {
        console.error("Error occurred during login:", error);
      });
  };

  return (
    <div className="log-bg-img">
      <div className="wrapper">
        <div className="outside-form">
          <form>
            <div className="inside-form">
              <h1>
                Welcome back to
                <span
                  style={{
                    fontFamily: "Roboto Slab, serif",
                    fontSize: "2rem",
                    letterSpacing: "3px",
                    fontWeight: "900",
                  }}
                >
                  Domazo
                </span>
              </h1>
              <h3>Log in</h3>
              <div className="input-box">
                <label htmlFor="Username">Username:</label>
                <input
                  id="username"
                  className="input-name"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="Pass">Password:</label>
                <input
                  className="input-pass"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="btn">
                <button
                  className="log-in"
                  type="button"
                  onClick={login}
                  style={{ cursor: "pointer" }}
                >
                  Log in
                </button>
              </div>
              <p className="dont-acc">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
