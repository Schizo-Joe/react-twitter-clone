import React, { forwardRef } from 'react';
import './SignUp.css';
import FavIcon from './favicon240.png';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const SignUp = (props) => {
    return (
        <div className="signUp" >
            <div className="icon__submit">
                <HighlightOffIcon onClick={props.activeStatusHandler} className="closeButton"/>
                <img className="favIcon" src={FavIcon} alt=""/>
                <p className="submit__button">Submit</p>
            </div>
            <h2>Create your account</h2>
            <form class="signUp__form" action="">
                <div className="one__input">
                    <label className="signUp__form__label" htmlFor="name__input">Name</label>
                    <input name="name__input" className="signUp__form__input" type="text"/>
                </div>
                <div className="one__input">
                    <label className="signUp__form__label" htmlFor="userName__input">Username</label>
                    <input name="userName__input" className="signUp__form__input" type="text"/>
                </div>
                <div className="one__input">
                    <label className="signUp__form__label" htmlFor="email__input">E-mail</label>
                    <input name="email__input" className="signUp__form__input" type="text"/>
                </div>
                <div className="one__input">
                    <label className="signUp__form__label" htmlFor="password__input">Password</label>
                    <input name="password__input" className="signUp__form__input" type="text"/>
                </div>
                
            </form>
        </div>
    )
};

export default SignUp;
