import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

export default function LoginSignUp() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const handleCheckboxChange = () => {
        setIsSignUp(!isSignUp);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="section">
            <div className="container">
                <div className="row full-height justify-content-center align-items-center">
                    <div className="col-12 col-md-6 offset-md-3 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 className="mb-0 pb-3">
                                {isSignUp ? 'Sign Up' : 'Log In'}
                                <span onClick={() => setIsSignUp(!isSignUp)} className="cursor-pointer">
                                    {isSignUp ? ' Log In' : ' Sign Up'}
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
                                <div className={`card-3d-wrapper ${isSignUp ? 'is-flipped' : ''}`}>
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Log In</h4>
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-group icon-group">
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
                                                        <FontAwesomeIcon icon={faAt} className="input-icon" />
                                                    </div>
                                                    <div className="form-group mt-2 icon-group">
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
                                                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                                                    </div>
                                                    <button type="submit" className="btn mt-4">
                                                        Log In
                                                    </button>
                                                </form>
                                                {!isSignUp && (
                                                    <p className="mb-0 mt-4 text-center">
                                                        <a href="#0" className="link">
                                                            Forgot your password?
                                                        </a>
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    {isSignUp && (
                                        <div className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">{isSignUp ? 'Sign Up' : 'Log In'}</h4>
                                                    <form onSubmit={handleSubmit}>
                                                        {isSignUp && (
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
                                                                <FontAwesomeIcon icon={faUser} className="input-icon" />
                                                            </div>
                                                        )}
                                                        <div className="form-group">
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
                                                            <FontAwesomeIcon icon={faAt} className="input-icon" />
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                type="password"
                                                                name="pass"
                                                                className="form-style"
                                                                placeholder="Your Password"
                                                                id="pass"
                                                                autoComplete="off"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                            <FontAwesomeIcon icon={faLock} className="input-icon" />
                                                        </div>
                                                        <button type="submit" className="btn mt-4">
                                                            {isSignUp ? 'Sign Up' : 'Log In'}
                                                        </button>
                                                    </form>
                                                    {!isSignUp && (
                                                        <p className="mb-0 mt-4 text-center">
                                                            <a href="#0" className="link">
                                                                Forgot your password?
                                                            </a>
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


