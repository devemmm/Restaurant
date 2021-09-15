import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultDetail from './ResultDetail'



const ResultList = ({title, result, navigation})=>{

    if(!result.length){
        return null;
    }
    
    return(
        <View>
            <Text style= {styles.title}>{title}</Text>
            <FlatList
                data = {result}
                horizontal
                showsHorizontalScrollIndicator = {false}
                keyExtractor = {result => result.id}
                renderItem = {({item})=>{
                    return(
                        <TouchableOpacity 
                            onPress = {()=>navigation.navigate('ResultShow', {id: item.id})}
                        >
                            <ResultDetail result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginVertical: 10
    }
});

export default ResultList;