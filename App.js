//https://www.youtube.com/watch?v=cFgoSrOui2M 18:04 for Austin to work on authentication
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import fire from './components/fire';

function appAuth() {
    
}

export default function App() {
    const [user, setUser] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [emailError, setEmailError] = useState('');
        const [passwordError, setPasswordError] = useState('');
        const [hasAccount, setHasAccount] = useState(false);

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

        const handleLogout = () => {
            fire.auth().signOut();
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

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>WeightExchange</Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({email:text})}/>
            </View>
            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({password:text})}/>
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05a6f0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:40,
        color:"#ffffff",
        marginBottom:40
    },
    inputView:{
        width:"80%",
        backgroundColor:"#ffffff",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"white"
    },
    forgot:{
        color:"white",
        fontSize:11
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#af9cff",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    loginText:{
        color:"white"
    }
});
