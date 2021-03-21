import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Login = (props) => {
    const {
        setEmail,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        emailError,
        passwordError,
        hasAccountHandler,
        setForgotPassword,
    } = props;

    function forgotPasswordHandler() {
        setForgotPassword(true);
    }

    return(
        <View style={styles.container}>
            {hasAccount ? (
                <Text style={styles.logo}>WeightExchange</Text>
            ):(<Text style={styles.logo}>Sign Up</Text>)}
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#003f5c"
                    onChangeText={setEmail}/>
            </View>
            <View style = {styles.errMsgBody}><Text style = {styles.errMsg}>{emailError}</Text></View>
            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    onChangeText={setPassword}/>
            </View>
            <View style = {styles.errMsgBody}><Text style = {styles.errMsg}>{passwordError}</Text></View>
            <View>
                {hasAccount ? (
                <>

                    <View>
                        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                            <Text style={styles.loginText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <View><Text>Don't have an account?</Text></View>
                    <View style={styles.switchToLoginOrRegister}>
                        <TouchableOpacity>
                            <Text style={styles.loginText} onPress={hasAccountHandler}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.forgotBody}>
                        <TouchableOpacity>
                            <Text style={styles.forgot} onPress = {forgotPasswordHandler}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </>
                ) : (
                <>
                    <View>
                        <TouchableOpacity style={styles.loginBtn} onPress={handleSignup}>
                            <Text style={styles.loginText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                        <View><Text>Already have an account?</Text></View>
                    <View style={styles.switchToLoginOrRegister}>
                        <TouchableOpacity>
                            <Text style={styles.loginText} onPress={hasAccountHandler}>Go Back</Text>
                        </TouchableOpacity>
                    </View>
                </>
                )}
            </View>
        </View>
    )
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
        marginBottom:5,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"black"
    },
    forgot:{
        color:"white",
        fontSize:11
    },
    loginBtn:{
        width:"100%",
        backgroundColor:"#af9cff",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:30
    },
    loginText:{
        color:"white"
    },
    errMsg:{
        color: 'red'
    },
    errMsgBody:{
        paddingBottom:15,
    },
    switchToLoginOrRegister:{
        alignItems: "center"
    },
    forgotBody:{
        alignItems:"center",
        marginTop:25
    }
});

export default Login;
