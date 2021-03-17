import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
const Profile = () => {
    return(
        <View style = {styles.container}>
            <Text>Hello User!</Text>
            <TouchableOpacity onPress = {handleLogout}>Logout</TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#ccffcf",
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Profile;