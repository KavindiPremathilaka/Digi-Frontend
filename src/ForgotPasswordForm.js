// ForgotPasswordForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPasswordForm.css';

function ForgotPasswordForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [codeSent, setCodeSent] = useState(false);

    const handleSendCode = () => {
        // Implement logic to send code to user's email
        console.log('Sending code to username:', username, ' and email:', email);
        setCodeSent(true);
    };

    const handleBackToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-form">
                <h2>Forgot Password</h2>
                <p>Enter your username and email to receive a verification code.</p>

                {!codeSent ? (
                    <>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <button className="send-code-btn" onClick={handleSendCode}>
                            Send Code
                        </button>
                    </>
                ) : (
                    <p>A verification code has been sent to your email address. Please check your inbox.</p>
                )}

                <button className="back-to-login-btn" onClick={handleBackToLogin}>
                    Back to Login
                </button>
            </div>
        </div>
    );
}

export default ForgotPasswordForm;
