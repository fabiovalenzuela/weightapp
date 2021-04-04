import React, { useState, useEffect }  from "react";
import {Text, View, StyleSheet, Button } from "react-native";
import {BarCodeScanner} from "expo-barcode-scanner";
import {sendApiRequest} from "./Edamam";
import styles from './globalstyles.js';

export const BarcodeScanner = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [pageSwitch, setPageSwitch] = useState(false);

    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({data}) => {
        setScanned(true);
        sendApiRequest(data);
        setPageSwitch(true);
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
        <CalorieCount/>
        
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

function CalorieCount() {
    return(
            <View style={styles.container}>
                <Text>Calories:</Text>
            </View>
    )
}
