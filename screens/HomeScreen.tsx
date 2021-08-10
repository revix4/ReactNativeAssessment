import React from "react";
import { StyleSheet } from 'react-native';
import NavBanner from "../components/NavBanner";
import { View, Text } from "../components/Themed";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const HomeScreen: React.FC<unknown> = (): JSX.Element => {
    return (
        <>
            <NavBanner/>
            <View style={styles.container}>
                <Text>
                    Life is like a box of chocolates, you never know what you're gonna to get.
                </Text>
            </View>
        </>
    )
}

export default HomeScreen;
