import React, { useState, useEffect } from 'react';
import fire from './components/fire';
import Login from './components/login';
import Profile from './components/Profile';
import ForgotPassword from './components/ForgotPassword';
import barcodeScanner from "./components/BarcodeScanner";

export default function App() {
        const [user, setUser] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [emailError, setEmailError] = useState();
        const [passwordError, setPasswordError] = useState();
        const [hasAccount, setHasAccount] = useState(true);
        const [forgotPassword, setForgotPassword] = useState(false);

        const clearInputs = () => {
            setEmail('');
            setPassword('');
        }

        const clearErrors = () => {
            setEmailError('');
            setPasswordError('');
        }
        const handleLogin = () => {
            clearErrors();
            fire
                .auth()
                .signInWithEmailAndPassword(email, password)
                .catch((err) => {
                    switch(err.code){
                        case "auth/invalid-email":
                        case "auth/user-disabled":
                        case "auth/user-not-found":
                            setEmailError(err.message);
                            break;
                        case "auth/wrong-password":
                            setPasswordError(err.message);
                            break;
                    }
                });
        };

        const handleSignup = () => {
            clearErrors();
            clearInputs();
            fire
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .catch((err) => {
                    switch(err.code){
                        case "auth/email-already-in-use":
                        case "auth/invalid-email":
                            setEmailError(err.message);
                            break;
                        case "auth/weak-password":
                            setPasswordError(err.message);
                            break;
                    }
                });
        };

        const authListener = () => {
            fire.auth().onAuthStateChanged( user => {
                if(user) {
                    clearInputs();
                    setUser(user);
                } else {
                    setUser("");
                }
            });
        };

        useEffect(() => {
            authListener();
        }, []);

        function hasAccountHandler() {
            setHasAccount(!hasAccount);
        }

    return (
        <>
        {forgotPassword ?(<><ForgotPassword/></>):(
            <>
            {user ? (
                <>
                    <Profile/>
                </>
            ):(
                <>
                    <Login
                    email = {email}
                    setEmail = {setEmail}
                    password = {password}
                    setPassword = {setPassword}
                    handleLogin = {handleLogin}
                    handleSignup = {handleSignup}
                    hasAccount = {hasAccount}
                    setHasAccount = {setHasAccount}
                    emailError = {emailError}
                    passwordError = {passwordError}
                    hasAccountHandler = {hasAccountHandler}
                    setForgotPassword = {setForgotPassword}
                    />
                </>

            )}
            </>
            )}
        </>
    );
}
