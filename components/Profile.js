import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
const Profile = ({handleLogout}) => {

    return(
        <View style = {styles.container}>
            <View><Text>Hello User!</Text></View>
            <View>
                <TouchableOpacity onPress = {handleLogout}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
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