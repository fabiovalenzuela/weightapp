import React  from "react";
import {Text, View} from "react-native";
import barcodeScanner from "./barcodeScanner";
import(barcodeScanner())

export default function HomeScreen() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

