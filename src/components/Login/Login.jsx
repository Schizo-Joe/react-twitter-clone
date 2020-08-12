import React, {useState, useContext} from 'react';
import {withRouter, Redirect} from 'react-router';
import {useHistory} from 'react-router-dom';
import firebaseApp from '../../Firebase';
import {AuthContext} from '../../UserAuth';
import './Login.css';
import FavIcon from './favicon240.png';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


const Login = (props) => {
    const [currentUser, setCurrentUser] = useContext(AuthContext);

    const history = useHistory();
    const auth = firebaseApp.auth();
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");

    const loginHandler = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, passWord).then((auth) => {
            history.push("/");
        }).catch(e => alert(e.message))
    }
    return (
        <div className="login__comp">
             <div className="icon__close">
                <HighlightOffIcon onClick={props.activeStatusHandler} className="closeButton"/>
                <img className="login__favIcon" src={FavIcon} alt=""/>
            </div>
            <form onSubmit={loginHandler} className="login__comp__form" action="">
                <div className="user__name__form">
                    <label class="main__input__label" htmlFor="username">Phone, email or username</label>
                    <input className="main__login__input" type="text" name="username" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="user__password__form">
                    <label class="main__input__label" htmlFor="password">Password</label>
                    <input className="main__login__input" type="text" name="password" type="password" value={passWord} onChange={(e) => setPassWord(e.target.value)} />
                    <a className="forgot__link" href="#">Forgot password?</a>
                </div>
                <a onClick={loginHandler}  href="#" className="main__login__button">Login</a>
            </form>
        </div>
    )
};

export default Login;
