import React, {useEffect, useState} from 'react';
import { Text, View, ScrollView, RefreshControl } from 'react-native';
import axios from "axios"
import { API_URL } from '../../Utils/constants.js'

import styles from './style.js'
import HistoryElement from '../Components/HistoryElement.js';

const History = ({navigation}) => {
    const [historyList, SetHistoryList] = useState([])
    const [refresh, SetRefresh] = useState(true)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            pullMe()
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation]);


    const getHistory = () => {
         axios
            .get(API_URL + 'history')
            .then(res => {
                SetHistoryList(res.data.data.reverse())
                SetRefresh(false)
                // console.log("HISTORYLIST\n", historyList)
            })
            .catch(e => {
                console.log(`history error ${e}`)
                SetRefresh(false)
            })
    }

    // const historyList = [
    //     {
    //         title: 'Humped back',
    //         type: 'Wrong',
    //         content: 'You\'re sitting hunched over with a 30-degree angle between your torso and thighs, which brings you closer to the screen, leading to rapid nearsightedness and a hunched back.',
    //         label: 'Warning',
    //         datetime: '12:30 10/5/2023',
    //         image: require('../../Public/std_pose/gu_lung.png')
    //     },
    //     {
    //         title: 'Footrest',
    //         type: 'Wrong',
    //         content: 'You are sitting cross-legged, this habit makes it difficult for blood to circulate, leading to numbness in your legs when standing up, this is a bad habit that will affect your posture in the future',
    //         label: 'Warning',
    //         datetime: '7:30 11/5/2023',
    //         image: require('../../Public/std_pose/gac_chan.png')
    //     },
    //     {
    //         title: 'Straight back',
    //         type: 'Correct',
    //         content: 'You are in an ideal sitting posture! Let\'s try to maintain it!',
    //         label: 'Compliment',
    //         datetime: '9:00 12/5/2023',
    //         image: require('../../Public/std_pose/thang_lung.png')
    //     }
    // ]
    const pullMe = () => {
        SetHistoryList([])
        SetRefresh(true)
        getHistory()
    }
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.title}>
                    HISTORY
                </Text>
                <Text style={styles.infor}>
                    *Note: Pull up to refresh history page
                </Text>
            </View>
            <View style={styles.centerImage}>
                <ScrollView 
                    style={styles.scroll}
                    refreshControl={
                        <RefreshControl
                            refreshing={refresh}
                            onRefresh={() => pullMe()}
                        />
                    }
                >
                {
                    historyList.map((item, index) => {
                        const Max_Image_Number = 20
                        if (index < Max_Image_Number)
                            return <HistoryElement key={index} item={item} />
                    })
                }
                </ScrollView>
            </View>
            <View style={styles.foot}>
            </View>
        </View>
    )
    
}
export default History;
