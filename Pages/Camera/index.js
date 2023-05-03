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
                    01:00:00
                </Text>
            </View>
            <View style={styles.centerImage}>
                <Image></Image>
            </View>
            <View style={styles.foot}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => console.log('Start/Stop video')}
                >
                    <Image 
                        style={[styles.image, {borderRadius: 10}]} 
                        source={require('../../Public/start.png')}>
                    </Image>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => console.log('Cancel video')}
                >
                    <Image 
                        style={[styles.image, {borderRadius: 100}]} 
                        source={require('../../Public/cancel.png')}>
                    </Image>
                </TouchableOpacity>
            </View>
        </View>
    )
    
}
export default Home;
