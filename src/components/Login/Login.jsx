import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <form className="login__form" action="">
                <div className="user__name__form">
                    <label class="input__label" htmlFor="username">Phone, email or username</label>
                    <input className="login__input" type="text" name="username"/>
                </div>
                <div className="user__password__form">
                    <label class="input__label" htmlFor="password">Password</label>
                    <input className="login__input" type="text" name="password"/>
                    <a className="forgot__link" href="#">Forgot password?</a>
                </div>
                <a href="#" className="login__button">Login</a>
            </form>
        </div>
    )
}

export default Login;
