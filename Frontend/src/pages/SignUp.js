import React, { useState } from 'react';
import logo from '../images/Navbar/Logo.png';
import Glogo from '../images/Signup/Google_Icons-09-512.png'
import { useForm } from 'react-hook-form';
import '../Styles/SignUp.css';

export default function Form() {
    const { register: registerSignup, handleSubmit: handleSubmitSignup, formState: { errors: errorsSignup } } = useForm();
    const { register: registerLogin, handleSubmit: handleSubmitLogin, formState: { errors: errorsLogin } } = useForm();
    const { register: registerForgotPassword, handleSubmit: handleSubmitForgotPassword, formState: { errors: forgotPasswordErrors } } = useForm();

    const [showSignup, setShowSignup] = useState(true);
    const [showLogin, setShowLogin] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);


    const onSubmitSignup = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            console.log('Signup response:', responseData);
            // Optionally, you can handle successful signup here (e.g., show a success message)
        } catch (error) {
            console.error('Signup error:', error);
            // Handle signup error (e.g., display error message to the user)
        }
    };

    const onSubmitLogin = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            console.log('Login response:', responseData);
            // Optionally, you can handle successful login here (e.g., redirect the user)
        } catch (error) {
            console.error('Login error:', error);
            // Handle login error (e.g., display error message to the user)
        }
    };
    const onSubmitForgotPassword = async (data) => {
        try {
            // Send forgot password request to backend
            const response = await fetch('http://localhost:3000/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            console.log('Forgot Password response:', responseData);
            // Optionally, handle success or display error messages
        } catch (error) {
            console.error('Forgot Password error:', error);
            // Handle error
        }
    };
    

    const handleLoginClick = () => {
        setShowSignup(false);
        setShowLogin(true);
        setShowForgotPassword(false);

    };

    const handleSignupClick = () => {
        setShowSignup(true);
        setShowLogin(false);
        setShowForgotPassword(false);

    };

    const showForgotPasswordModal = () => {
        setShowSignup(false);
        setShowLogin(false);
        setShowForgotPassword(true);
    };

    const hideForgotPasswordModal = () => {
        setShowForgotPassword(false);
        setShowLogin(true);

    };

    return (
            <div className="register">
                <div className="col-2">
                    <img src={logo}></img>
                </div>
                <div className="col-1">
                    {showSignup && (
                        <div className="signup-section">
                            <h2>Sign Up</h2>
                            {/* <span>Signup Using Email</span> */}


                            <form onSubmit={handleSubmitSignup(onSubmitSignup)}>
                                {/* Signup form inputs */}
                                <input type="email" name="email" placeholder="Email" {...registerSignup('email', { required: true })} />
                                {errorsSignup.email && <span>Email is required</span>}
                                <input type="password" name="password" placeholder="Password" {...registerSignup('password', { required: true })} />
                                {errorsSignup.password && <span>Password is required</span>}
                                <input type="tel" name="phone" placeholder="Phone Number" {...registerSignup('phone', { required: true })} />
                                {errorsSignup.phone && <span>Phone number is required</span>}
                                <input type="text" name="department" placeholder="Department" {...registerSignup('department', { required: true })} />
                                {errorsSignup.department && <span>Department is required</span>}
                                <button type="submit" className="submit-button">Sign Up</button>
                            </form>
                            <p className="already-member">Already a member? <a href="#" onClick={handleLoginClick}>Log In</a></p>

                            <span>Or use your Gmail</span>
                            <button type="submit" className="GoogleButton"><img className='Glogo' src={Glogo}></img> Sign in with Google</button><br></br>

                        </div>
                    )}
                    {showLogin && (
                        <div className="login-section">
                            <h2>Log In</h2>
                            {/* <button type="submit" className="GoogleButton">Sign in with Google</button><br></br> */}

                            <span>Enter your credentials</span>
                            <form onSubmit={handleSubmitLogin(onSubmitLogin)}>
                                {/* Login form inputs */}
                                <input type="email" name="loginEmail" placeholder="Email" {...registerLogin('loginEmail', { required: true })} />
                                {errorsLogin.loginEmail && <span>Email is required</span>}
                                <input type="password" name="loginPassword" placeholder="Password" {...registerLogin('loginPassword', { required: true })} />
                                {errorsLogin.loginPassword && <span>Password is required</span>}
                                <p className="forgot-password"><a href="#" onClick={showForgotPasswordModal}>Forgot Password?</a></p>

                                <button type="submit" className="submit-button">Log In</button>
                            </form>
                            <p className="already-member">Not a member? <a href="#" onClick={handleSignupClick}>Sign Up</a></p>
                            <button type="submit" className="GoogleButton"><img className='Glogo' src={Glogo}></img> Sign in with Google</button><br></br>

                        </div>
                    )}
                     {showForgotPassword && (
                        <div className="forgot-password-section">
                            <h2 style={{marginLeft:'100px'}}gg>Forgot Password</h2>
                            <form onSubmit={handleSubmitForgotPassword(onSubmitForgotPassword)}>
                                <input type="email" name="email" placeholder="Email" {...registerForgotPassword('email', { required: true })} />
                                {forgotPasswordErrors.email && <span>Email is required</span>}
                                <button type="submit" className="submit-button">Reset Password</button>
                            </form>
                            <p className="back-to-login" onClick={hideForgotPasswordModal}>Back to <b>LOGIN</b></p>
                        </div>
                    )}
                </div>
            </div>
    );
}
