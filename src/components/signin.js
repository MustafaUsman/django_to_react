import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAt, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FaAt, FaLock, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";



function LoginPage({ onSuccessfulLogin }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login or signup
    if (email === "asad@gmail.com" && password === "1234") {
      onSuccessfulLogin(true);
      setIsAuthenticated(true);
      navigate("/Homepost");
    }
    if (email === "usman@gmail.com" && password === "1234") {
      onSuccessfulLogin(true);
      setIsAuthenticated(true);
      navigate("/Homepost");
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Handle login or signup
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Full Name: ${fullName}`);
  };

  const handleCheckboxChange = (e) => {
    setIsSignUp(e.target.checked);
  };

  return (
    <div className="section" style={{ backgroundColor: "#20201C" }}>
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3" style={{ color: "white", fontWeight: "bold", textTransform: "uppercase" }}>
                Log in{' '}
                <span>
                  sign up
                </span>
              </h6>


              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
                checked={isSignUp}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div
                  className={`card-3d-wrapper ${isSignUp ? "is-flipped" : ""}`}
                >
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h3 className="mb-4 pb-3" style={{ color: "white" }}>
                          {" "}
                          <u>
                            <i>THE DAILY SHOW</i>
                          </u>
                        </h3>
                        <h4 className="mb-4 pb-3" style={{ color: "white" }}>
                          Log In
                        </h4>
                        <form onSubmit={handleLoginSubmit}>
                          <div className="form-group">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="off"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <FaAt className="input-icon" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <FaLock className="input-icon" />
                          </div>
                          <button
                            type="submit"
                            className="btn mt-4"
                            style={{ color: "white" }}
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3" style={{ color: "white" }}>
                          Sign Up
                        </h4>
                        <form onSubmit={handleSignUpSubmit}>
                          <div className="form-group">
                            <input
                              type="text"
                              name="fullname"
                              className="form-style"
                              placeholder="Your Full Name"
                              id="fullname"
                              autoComplete="off"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                            />
                            <FaUser className="input-icon" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="email"
                              className="form-style"
                              placeholder="Your Email"
                              id="email"
                              autoComplete="off"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <FaAt className="input-icon" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="password"
                              className="form-style"
                              placeholder="Your Password"
                              id="password"
                              autoComplete="off"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <FaLock className="input-icon" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="confirmpass"
                              className="form-style"
                              placeholder="Confirm Your Password"
                              id="confirmpass"
                              autoComplete="off"
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                            />
                            <FaLock className="input-icon" />
                          </div>
                          <button
                            type="submit"
                            className="btn mt-4"
                            style={{ color: "white" }}
                          >
                            Register
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;