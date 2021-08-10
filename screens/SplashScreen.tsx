import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, Image } from 'react-native';
import { View } from "../components/Themed";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 100,
        width: 100,
    }
});

const SplashScreen: React.FC<unknown> = (): JSX.Element => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Home');
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/images/favicon.png')}/>
        </View>
    )
}

export default SplashScreen;
