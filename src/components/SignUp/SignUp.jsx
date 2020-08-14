import React, {useState} from 'react';
import firebaseApp from '../../Firebase';
import {useHistory} from 'react-router-dom';
import './SignUp.css';
import FavIcon from './favicon240.png';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const SignUp = (props) => {
    const db = firebaseApp.firestore();
    const auth = firebaseApp.auth();

    const history = useHistory();
    
    const [createAccountStatus, setCreateAccountStatus] = useState(false);

    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUpHandler =  event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            // history.push('/');
            setCreateAccountStatus(true);
            setName("");
            setUserName("");
            setEmail("");
            setPassword("");
            db.collection('users').add({
                displayName: name,
                userName,
                email,
                verified: false,
                profileImage: ""
            });
            
        }).catch(e => alert(e.message));
        auth.signOut();
    }
    return (
        <div className="signUp" >
            <div className="icon__submit">
                <HighlightOffIcon onClick={props.activeStatusHandler} className="closeButton"/>
                <img className="favIcon" src={FavIcon} alt=""/>
                <p onClick={signUpHandler} className="submit__button">Submit</p>
            </div>
            <h2>Create your account</h2>
            <form class="signUp__form">
                <div className="one__input">
                    <label className="signUp__form__label" htmlFor="name__input">Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} name="name__input" className="signUp__form__input" type="text"/>
                </div>
                <div className="one__input">
                    <label className="signUp__form__label" htmlFor="userName__input">Username</label>
                    <input value={userName} onChange={e => setUserName(e.target.value)} name="userName__input" className="signUp__form__input" type="text"/>
                </div>
                <div className="one__input">
                    <label className="signUp__form__label" htmlFor="email__input">E-mail</label>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} name="email__input" className="signUp__form__input" type="text"/>
                </div>
                <div className="one__input">
                    <label className="signUp__form__label" htmlFor="password__input">Password</label>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} name="password__input" className="signUp__form__input" type="text"/>
                </div>
                { createAccountStatus && <p className="accountCreatedStatus">Account created successfully. Please Login.</p>}
            </form>
        </div>
    )
};

export default SignUp;
