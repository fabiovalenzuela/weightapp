import React, { useState, useEffect }  from "react";
import {Text, View, StyleSheet, Button } from "react-native";
import {BarCodeScanner} from "expo-barcode-scanner";
import {sendApiRequest} from "./Edamam";
import styles from './globalstyles.js';
import fire from './fire';

export const BarcodeScanner = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [pageSwitch, setPageSwitch] = useState(false);
    const [calories, setCalories] = useState(0);
    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    function CalorieCount() {
        fire.database().ref('users/' + fire.auth().currentUser.uid + "/caloriesConsumed").on('value',(snapshot => {
            const data = snapshot.val();
            setCalories(data);
        }))
    }

    const handleBarCodeScanned = ({data}) => {
        setScanned(true);
        sendApiRequest(data);
        setPageSwitch(true);
        CalorieCount();
        setScanned(false);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <>
        {pageSwitch ? (
        <View style={styles.container}>
            <Text>Calories: {calories}</Text>
        </View>
        
        ):(
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
        </View>
        )}
        </>
    );
}




