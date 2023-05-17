import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { API_URL } from '../../Utils/constants.js'
import styles from './style.js'
// import FastImage from 'react-native-fast-image';
import ExpoFastImage from 'expo-fast-image';
import CachedImage from '../Components/ImageCache.js';

const Camera = ({navigation}) => {
    const [pause, SetPause] = useState(false)
    const [path, SetPath] = useState(require('../../Public/pause.png'))
    const [timerHours, SetTimerHours] = useState(0)
    const [timerMinutes, SetTimerMinutes] = useState(0)
    const [timerSeconds, SetTimerSeconds] = useState(0)

    let interval = null

    const handleStartStop = () => {
        SetPause(!pause)
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            SetPause(false)
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        // console.log(pause)
        if(pause){
            SetPath(require('../../Public/startt.png'))
        }
        else{
            SetPath(require('../../Public/pause.png'))
        }
    }, [pause])
    
    useEffect(() => {
        interval = setInterval(() => {
            if(!pause){
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

    // const [time, setTime] = useState(Date.now());
    // const [src, setSrc] = useState('../../Public/avatar.png')
    const [image, setImage] = useState(`${API_URL}getImage`)

    // //C1
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if(!pause){
    //             setTime(Date.now())
    //             setSrc("https://pbl5server.onrender.com/api/getImage?" + time)
    //             // console.log(src + ", " + time)
    //         }
    //     }, 1000);
    //     return () => {
    //         clearInterval(interval);
    //     };
    // });

    // //C2
    // const getAquariumImageSource = (id) => {
    //     return {
    //         uri: `${API_URL}getImage?${id}`,
    //         method: "GET",
    //         headers: {
    //             Pragma: "no-cache"
    //         },
    //         cache: "reload"
    //     }
    // }

    // Cách tốt nhất
    fetch(API_URL+'getImage')
        .then(response => response.blob())
        .then(blob => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result;
                setImage(base64data);
            };
        });



    return (
        <View style={styles.container}>
            {/* <ImageBackground
                style={styles.background}
                source={require('../../Public/camera_background.png')}> */}

                <View style={styles.head}>
                    <Text style={styles.title}>
                        {timerHours < 10 ? "0"+timerHours : timerHours} : {timerMinutes < 10 ? "0"+timerMinutes : timerMinutes} : {timerSeconds < 10 ? "0"+timerSeconds : timerSeconds}
                    </Text>
                </View>
                <View style={styles.centerImage}>      
                    <Image
                        style={styles.background}
                        source={{ uri: image }}
                        fadeDuration={0}
                    />                    
                    {/* <ExpoFastImage
                        key={src}
                        style={styles.background}
                        // source={{uri: src}}
                        uri={src}
                        cacheKey={time.toString()}
                        fadeDuration={0}
                    /> */}
                    {/* <CachedImage
                        source={{uri:src}} // image address
                        cacheKey={time.toString()} // could be a unique id
                        style={styles.background}
                    // any supported props by Image
                    /> */}
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
                {/* </ImageBackground> */}
        </View>
    )
    
}
export default Camera;

