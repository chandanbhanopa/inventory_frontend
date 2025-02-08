import React from "react";
import '../css/login.css';
import image from '../images/image.jpg'
import logo from '../images/logo.jpg';

function Login() {
    return(
        <div class="container">
            <div class="left">
                <img src={image} alt="Lovebirds" />
                <h2>India's most fast billing software</h2>
                <p>Access your inventory management system effortlessly. Log in to track, manage, and optimize your stock in one place. Stay organized and in control of your business operations with ease</p>
            </div>
            <div class="right">     
            <form>
                <div>
                    <img src={logo} class="Logo" />
                </div>
                <h2>Welcome to VyaparTrack</h2>
                <div class="form-group">
                <label for="username">Username or Email</label>
                <input type="text" id="username" placeholder="Enter your username or email" />
                </div>
                <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" />
                </div>
                <div class="form-actions">
                <a href="#">Forgot password?</a>
                </div>
                <button class="btn" type="submit">Sign In</button>
            </form>
        </div>
    </div>
    )
}

export default Login;