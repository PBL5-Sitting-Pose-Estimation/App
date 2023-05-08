import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';

import styles from './style.js'

const Home = ({navigation}) => {
    const [pause, SetPause] = useState(false)
    const [path, SetPath] = useState(require('../../Public/pause.png'))
    const [timerHours, SetTimerHours] = useState(0)
    const [timerMinutes, SetTimerMinutes] = useState(0)
    const [timerSeconds, SetTimerSeconds] = useState(0)

    let interval = null

    const handleStartStop = async () => {
        await SetPause(!pause)
        if(pause){
            SetPath(require('../../Public/startt.png'))
        }
        else{
            SetPath(require('../../Public/pause.png'))
        }
    }
    
    useEffect(() => {
        interval = setInterval(() => {
            if(pause){
                SetTimerSeconds(timerSeconds + 1)

                if(timerSeconds === 59){
                    SetTimerMinutes(timerMinutes + 1)
                    SetTimerSeconds(0)
                    
                    if(timerMinutes === 60){
                        SetTimerHours(timerHours + 1)
                        SetTimerMinutes(0)
                    }
                }
            }
        }, 1000)
        return () => clearInterval(interval)
    })

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.background}
                source={require('../../Public/camera_background.png')}>
                <View style={styles.head}>
                    <Text style={styles.title}>
                        {timerHours < 10 ? "0"+timerHours : timerHours} : {timerMinutes < 10 ? "0"+timerMinutes : timerMinutes} : {timerSeconds < 10 ? "0"+timerSeconds : timerSeconds}
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
                        onPress={
                            () => {
                                clearInterval(interval)
                                SetTimerHours(0)
                                SetTimerMinutes(0)
                                SetTimerSeconds(0)
                                SetPause(true)
                                SetPath(require('../../Public/pause.png'))
                                navigation.goBack()
                            }
                        }
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
