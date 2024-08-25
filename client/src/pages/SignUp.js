import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

function SignUp() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values) => {
    axios
      .post("http://localhost:3001/signup", values)
      .then((response) => {
        console.log(response.data);
        // Redirect to login page after successful signup
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="sign-bg-img">
      <div className="wrapper">
        <div className="outside-sign-form">
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
              <div className="inside-form">
                <h1>
                  Welcome to
                  <span
                    style={{
                      fontFamily: "Roboto Slab, serif",
                      fontSize: "2rem",
                      letterSpacing: "3px",
                      fontWeight: 900,
                    }}
                  >
                    Domazo
                  </span>
                </h1>
                <h3>Sign Up</h3>
                <div className="input-box">
                  <label htmlFor="username">Username:</label>
                  <Field
                    id="username"
                    name="username"
                    className="input-name"
                    type="text"
                    placeholder="Username"
                    required
                  />
                  <ErrorMessage name="username" component="span" />
                </div>
                <div className="input-box">
                  <label htmlFor="password">Password:</label>
                  <Field
                    id="password"
                    name="password"
                    className="input-pass"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <ErrorMessage name="password" component="span" />
                </div>
                <button className="sign-in centered-button" type="submit">
                  Sign Up
                </button>
                <p className="have-acc">
                  Have an account?
                  <Link to="/login">Login</Link>
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
