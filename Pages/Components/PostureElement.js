import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const PostureElement = (props) => {
    const colorList = ['#faebd7', '#41fca3', '#f65e44', '#00e8ff', '#e0e000', '#ffa8e2', '#cccccc']
    return (
        <View style={[styles.container, {backgroundColor: colorList[props.index]}]}>
            <Text 
                style={styles.title}>{props.title}</Text>
            <Image
                source={props.image}
                style={styles.image}
             />
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItem: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderWidth: 1,
        // borderStyle: 'dashed',
        borderRadius: 17,
        borderColor: '#8F9FBF',
        padding: 5,
        paddingHorizontal: 8
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 300
    }
})

export default PostureElement;