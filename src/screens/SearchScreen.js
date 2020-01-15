import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
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
        <>
            <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={setSearchTerm}
                onTermSubmit={() => searchApi(searchTerm)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    title="Cost Effective"
                    results={filterRestaurantsByPrice('$')}
                />
                <ResultsList
                    title="Pricier"
                    results={filterRestaurantsByPrice('$$')}
                />
                <ResultsList
                    title="$$$$$"
                    results={filterRestaurantsByPrice('$$$')}
                />
                <ResultsList
                    title="Bloomberg"
                    results={filterRestaurantsByPrice('$$$$')}
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
});

export default SearchScreen;