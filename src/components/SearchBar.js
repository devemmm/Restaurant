import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit})=>{
    return(
        <View style={styles.background}>
            <Feather name="search" style = {styles.searchIcon}/>
            <TextInput 
                style = {styles.inputText}
                autoCapitalize = "none"
                autoCorrect = {false}
                placeholder = "Search"
                value = {term}
                onChangeText = {onTermChange}
                onEndEditing = {onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#d7d4d9',
        height: 50,
        borderRadius: 15,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10
    },
    searchIcon: {
        fontSize: 30,
        color: 'black',
        alignSelf: 'center',
        marginHorizontal: 10
    },
    inputText: {
        // borderWidth: 1,
        // backgroundColor: 'grey',
        fontSize: 20,
        flex: 1,
        marginHorizontal: 10

    }
});

export default SearchBar;