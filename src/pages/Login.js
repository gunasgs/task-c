import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [loading, setloading] = useState(false);
  let navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      setloading(true);
      try {
        let loginData = await axios.post(
          "https://www.melivecode.com/api/login",
          values
        );
        localStorage.setItem("token", loginData.data.accessToken);
        setloading(false);
        navigate("/home");
      } catch (error) {
        setloading(false);
        alert("Signin failed: " + error);
      }
    },
  });
  return (
    <>
      <div className="login-con">
        <div className="login-card">
          <div className="login-head">
            <h4>SIGN IN</h4>
            <p className="small">
              Enter your credentials to access your account
            </p>
          </div>
          <div className="container">
            <div className="row">
              <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <div className="col-12 mt-3">
                  <label className="form-label label" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="username"
                    id="username"
                    className="email-inp form-control "
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="col-12 mt-2">
                  <label className="form-label label" for="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="Enter your password"
                    className="pass-inp form-control"
                    required
                  />
                </div>
                <div>
                  {loading ? (
                    <p className="loading">Loading...</p>
                  ) : (
                    <input
                      type="submit"
                      className="login-btn btn mt-3"
                      value="SIGN IN"
                    />
                  )}
                </div>
              </form>
            </div>
          </div>
          <p className="mt-2 text-center">
            Forgot your password?
            <span className="for-link">Reset Password</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
