import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'


const ResultShownScreen = ({navigation})=>{

    const [result , setResult ] = useState(null)
    const id = navigation.getState().routes[1].params.id

    const getResult = async(id)=>{
        const response = await yelp.get(`/${id}`)

        setResult(response.data)
    }

    useEffect(()=>{
        getResult(id)
    }, [])


    if(!result ){
        return null;
    }

    return(
        <View>
            <FlatList
                data = {result.photos}
                keyExtractor = {(photo)=>photo}
                renderItem = {({item})=>{
                    return <Image 
                        style = {styles.image}
                        source ={{uri: item}}
                    />
                }}
            />
        </View>
    ) 
}

const styles = StyleSheet.create({
    image : {
        height: 200,
        width: 300,
        marginVertical: 10,
        borderRadius: 10
    }
})

export default ResultShownScreen;