import React, {useState} from 'react';
import './Login.css';

function Login() {
    const [userName, setUserName] = useState();
    const [passWord, setPassWord] = useState();

    return (
        <div className="login">
            <form className="login__form" action="">
                <div className="user__name__form">
                    <label class="input__label" htmlFor="username">Phone, email or username</label>
                    <input className="login__input" type="text" name="username" value={userName} onChange={e => setUserName(e.target.value)}/>
                </div>
                <div className="user__password__form">
                    <label class="input__label" htmlFor="password">Password</label>
                    <input className="login__input" type="text" name="password" value={passWord} onChange={e => setPassWord(e.target.value)} />
                    <a className="forgot__link" href="#">Forgot password?</a>
                </div>
                <a onClick={console.log(userName, passWord)} href="#" className="login__button">Login</a>
            </form>
        </div>
    )
}

export default Login;
