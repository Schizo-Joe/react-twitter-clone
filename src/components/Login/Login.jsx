import React, {useState, forwardRef} from 'react';
import './Login.css';
import FavIcon from './favicon240.png';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


const Login = (props) => {
    const [userName, setUserName] = useState();
    const [passWord, setPassWord] = useState();


    return (
        <div className="login__comp">
             <div className="icon__close">
                <HighlightOffIcon onClick={props.activeStatusHandler} className="closeButton"/>
                <img className="login__favIcon" src={FavIcon} alt=""/>
            </div>
            <form className="login__comp__form" action="">
                <div className="user__name__form">
                    <label class="main__input__label" htmlFor="username">Phone, email or username</label>
                    <input className="main__login__input" type="text" name="username" value={userName} onChange={e => setUserName(e.target.value)}/>
                </div>
                <div className="user__password__form">
                    <label class="main__input__label" htmlFor="password">Password</label>
                    <input className="main__login__input" type="text" name="password" value={passWord} onChange={e => setPassWord(e.target.value)} />
                    <a className="forgot__link" href="#">Forgot password?</a>
                </div>
                <a  href="#" className="main__login__button">Login</a>
            </form>
        </div>
    )
};

export default Login;
