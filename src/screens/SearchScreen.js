import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, restaurants, errorMessage] = useRestaurants();

    const filterRestaurantsByPrice = (price) => {
        //price === $ || $$ || $$$
        return restaurants.filter(result => {
            return result.price === price
        })
    }

    return (
        <View style={{flex: 1}}>
            <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={setSearchTerm}
                onTermSubmit={() => searchApi(searchTerm)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>Number of restaurants: {restaurants.length}</Text>
            <ScrollView>
                <ResultsList title="Cost Effective" results={filterRestaurantsByPrice('$')} />
                <ResultsList title="Pricier" results={filterRestaurantsByPrice('$$')} />
                <ResultsList title="$$$$$" results={filterRestaurantsByPrice('$$$')} />
                <ResultsList title="Bloomberg" results={filterRestaurantsByPrice('$$$$')} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
});

export default SearchScreen;