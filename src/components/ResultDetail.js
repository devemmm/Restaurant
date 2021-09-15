import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultDetail = ({result})=>{
    return(
        <View style = {styles.container}>
            <Image 
                source = {{uri: result.image_url}}
                style = {styles.image}
            />
            <Text style={styles.name}>{result.name}</Text>
            <Text style = {styles.review}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },
    image: {
        height: 200,
        width: 250,
        borderRadius: 10,
        marginBottom: 5
    },
    name:{
        fontWeight: 'bold',
        fontSize: 16
    },
    review:{
        fontSize: 16
    }
});


export default ResultDetail;