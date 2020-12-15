import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Login.css';
import { auth } from '../Firebase/Firebase'

const Login = () => {
    const history = useHistory();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/");
            })
            .catch(error => alert(error.message));
    }

    const signUp = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth) {
                    history.push("/");
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
                    className="login__logo"
                    alt="amazon-login-logo"
                />
            </Link>
            <div className="login__container">
                <form>
                    <h2>Sign-In</h2>
                    <label>Email or mobile phone number</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text"/>
                    <input className="login__passwordInput" value={password} onChange={e => setPassword(e.target.value)} type="password"/>
                    <button onClick={signIn} className="login__signInButton" type="submit">Continue</button>
                    <p className="login__terms">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <p>Need Help?</p>
                </form>
                <p>New to Amazon</p>
                <button type="submit" onClick={signUp} className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>
    );
};

export default Login;