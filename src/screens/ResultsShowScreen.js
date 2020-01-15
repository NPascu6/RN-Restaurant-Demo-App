import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/Yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id)
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                keyExtractor={photo => photo}
                data={result.photos}
                renderItem={({ item }) => {
                    return <Image source={{ uri: item }} style={styles.imageStyle} />
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 100,
        width: 100
    }
});

export default ResultsShowScreen;