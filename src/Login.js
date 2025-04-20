// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate = useNavigate();

    const handleSignIn = () => {
        // Placeholder logic - replace with actual authentication
        navigate('/shop'); // Navigate to shop upon successful login
    };

    const handleSignUp = () => {
        navigate('/register'); // Navigate to registration form
    };

    const handleForgotPassword = () => {
        navigate('/forgot-password'); // Navigate to forgot password form
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Welcome Back</h2>
                <p>Please sign in to your account</p>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" />
                </div>

                <div className="remember-me">
                    <label>
                        <input type="checkbox" />
                        Remember Me
                    </label>
                    <button className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</button>
                </div>

                <button className="sign-in-btn" onClick={handleSignIn}>Sign In</button>

                <div className="sign-up">
                    Don't have an account? <button onClick={handleSignUp}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
