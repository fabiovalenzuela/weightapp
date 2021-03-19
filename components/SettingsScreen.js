import {Text, View, TouchableOpacity} from "react-native";
import React from "react";
import fire from "./fire";

const handleLogout = () => {
    fire.auth().signOut();
};

export default function SettingsScreen() {
    return (
        <View style={{flex: 1,
            backgroundColor:"#ccffcf",
            alignItems: 'center',
            justifyContent: 'center'}}>
            <Text>Settings!</Text>
            <View>
                <TouchableOpacity onPress = {handleLogout}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
