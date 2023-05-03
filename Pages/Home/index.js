import * as React from 'react';
import { Button, Text, View, TouchableOpacity, Image } from 'react-native';

import styles from './style.js'
// import BottomTab from '../Components/BottomTab.js';

const Home = ({navigation}) => {
    const checkLogic = () => {
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.title}>
                    Welcome back,
                </Text>
                <Text style={[styles.title, {color: '#8F9FBF'}]}>
                    Thxnhi!
                </Text>
                <Image style={styles.image} source={require('../../Public/avatar.png')}>

                </Image>
            </View>
            <View style={styles.centerImage}>
                <Image></Image>
            </View>
            <View style={styles.foot}>
            </View>
        </View>
    )
    
}
export default Home;
