import React from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#72A4C2',
        height: '10%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    flexBox: {
        backgroundColor: '#72A4C2',
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#F26925',
        borderRadius: 10,
        fontWeight: 'bold',
        margin: 10,
        padding: 15,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
});

const NavBanner: React.FC<unknown> = (): JSX.Element => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.flexBox}>
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Home')}}>
                    <Text style={styles.buttonText}>
                        Home
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('News')}}>
                    <Text style={styles.buttonText}>
                        Show News
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NavBanner;