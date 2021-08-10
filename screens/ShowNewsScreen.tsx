import React, { useEffect, useState } from "react";
import { View } from "react-native";
import NavBanner from "../components/NavBanner";
import NewsItem from "../components/NewsItem";
import { News } from "../Modals/News";

const customData: News = require('../assets/News.json');

const ShowNewsScreen: React.FC<unknown> = (): JSX.Element => {
    const [newsItems, setNewsItems] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const items: JSX.Element[] = [];
        for(let i = 0; i < customData.articles.length && i < 50; i++) {
            items.push(<NewsItem article={customData.articles[i]}/>);
        }
        setNewsItems(items);
    }, []);

    return(
        <>
            <NavBanner/>
            <View>
                {newsItems}
            </View>
        </>
    )
}

export default ShowNewsScreen;
