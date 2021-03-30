import React, { useState } from 'react';
import {Text, View, TextInput, TouchableOpacity } from 'react-native';
import fire from './fire';

export default function ForgotPassword() {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    function passwordReset() {
           return fire.auth().sendPasswordResetEmail(email)
        }
    return (
        <View style={{flex: 1,
            backgroundColor:"#ccffcf",
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'}}>
            <View style ={{marginBottom: 10}}><Text style ={{fontWeight:'bold'}}>Enter your email here</Text></View>
                <View style ={{width:"70%",
                backgroundColor:"#ffffff",
                borderRadius:25,
                height:50,
                marginBottom:5,
                justifyContent:"center",
                padding:20}}>
                    <TextInput
                            style={{height:50,
                                color:"black"}}
                            placeholder="Email Address..."
                            placeholderTextColor="#003f5c"
                            onChangeText={setEmail}/>
                </View>
                <View><Text>{emailError}</Text></View>
                <View><TouchableOpacity onPress = {passwordReset}><Text>Submit</Text></TouchableOpacity></View>
        </View>
    );
}
