import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult'
import ResultList from '../components/ResultList'

const SearchScreen = ({navigation})=>{

    const [term , setTerm ] = useState('')
    const [searchApi, result, errorMesage] = useResult()

    const filterResultByPrice = (price)=>{
        return result.filter(result=>{
            return result.price === price;
        });
    };

    return(
        <>
            <SearchBar 
                term = {term} 
                onTermChange = {newTerm=> setTerm(newTerm)}
                onTermSubmit = {()=>searchApi(term)}
            />
            {errorMesage ? <Text style={{color: 'red'}}>{errorMesage}</Text> : null}
            <ScrollView>
                <ResultList 
                    navigation = {navigation}
                    result = {filterResultByPrice('$')} 
                    title="Cost Effective"
                />
                <ResultList 
                    navigation = {navigation}
                    result = {filterResultByPrice('$$')} 
                    title="Bit Pricier"
                />
                <ResultList 
                    navigation = { navigation}
                    result = {filterResultByPrice('$$$')} 
                    title="Big Spender"
                />
            </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;