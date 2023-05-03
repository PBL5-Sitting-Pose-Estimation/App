import * as React from 'react';
import { useState } from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
// import CountDown from 'react-native-countdown-component';

import styles from './style.js'

const Home = ({navigation}) => {
    const [pause, SetPause] = useState(false)
    const [path, SetPath] = useState(require('../../Public/pause.png'))
    const handleStartStop = () => {
        SetPause(!pause)
        if(pause){
            SetPath(require('../../Public/startt.png'))
        }
        else{
            SetPath(require('../../Public/pause.png'))
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.background}
                source={require('../../Public/camera_background.png')}>
                    
                <View style={styles.head}>
                    <Text style={styles.title}>
                        {/* <CountDown 
                            size={30}
                            until={20}
                            // onFinish={}
                            showSeparator
                            timeToShow={['H', 'M', 'S']}
                            
                        /> */}
                        00:01:00
                    </Text>
                </View>
                <View style={styles.centerImage}>
                </View>
                <View style={styles.foot}>
                    <TouchableOpacity
                        style={styles.btnStartStop}
                        onPress={handleStartStop}
                    >
                        <Image 
                            style={[styles.image, {borderRadius: 10}]} 
                            source={path}
                            >
                        </Image>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={styles.btnCancel}
                        onPress={() => navigation.goBack()}
                    >
                        <Image 
                            style={[styles.image, {borderRadius: 100}]} 
                            source={require('../../Public/cancel.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>

                </ImageBackground>
        </View>
    )
    
}
export default Home;
