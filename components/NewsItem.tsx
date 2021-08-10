import React from "react";
import { Articles } from "../Modals/News";
import { Text, View } from "./Themed";
import { StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 7,
        marginVertical: 3,
        paddingVertical: 5,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    text: {
        fontFamily: 'futura-medium',
        padding: 5,
    },
    logo: {
        height: 100,
        width: 100,
    },
});

type Props = {
    article: Articles,
}

const NewsItem: React.FC<Props> = ( {article} ): JSX.Element => {
    return(
        <TouchableOpacity style={styles.container} onPress={() => {Linking.openURL(article.url);}}>
            <View style={styles.container}>
                <Text style={styles.header}>
                    Title
                </Text>
                <Text style={styles.text}>
                    {article.title}
                </Text>
                <Text style={styles.header}>
                    Description
                </Text>
                <Text style={styles.text}>
                    {article.description}
                </Text>
                <Image source={{uri: article.urlToImage}} style={styles.logo}/>
            </View>
        </TouchableOpacity>
    )
}

export default NewsItem;