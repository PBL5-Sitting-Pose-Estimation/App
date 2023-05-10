import * as React from 'react';
import { Button, Text, View, ScrollView, Image } from 'react-native';

import styles from './style.js'
import PostureElement from '../Components/PostureElement.js';

const Posture = ({navigation}) => {
    const postureList = [
        {
            title: 'Gac chan',
            image: require('../../Public/std_pose/gac_chan.png')
        },
        {
            title: 'Gu lung',
            image: require('../../Public/std_pose/gu_lung.png')
        },
        {
            title: 'Nga lung',
            image: require('../../Public/std_pose/nga_lung.png')
        },
        {
            title: 'Nghieng nguoi',
            image: require('../../Public/std_pose/nghieng_nguoi.png')
        },
        {
            title: 'Ngoi xom',
            image: require('../../Public/std_pose/ngoi_xom.png')
        },
        {
            title: 'Ngu gat',
            image: require('../../Public/std_pose/ngu_gat.png')
        },
        {
            title: 'Thang lung',
            image: require('../../Public/std_pose/thang_lung.png')
        }
    ]
    const checkLogic = () => {
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.title}>
                    Let's start!
                </Text>
                <Text style={[styles.title, {fontFamily: 'Nunito regular', fontStyle: 'italic'}]}>
                    The following are the skeletons included in the system!
                </Text>
                <Image style={styles.image} source={require('../../Public/human-body.png')}>

                </Image>
            </View>
            <View style={styles.centerImage}>
                <ScrollView 
                    style={styles.scroll}>
                {
                    postureList.map((item, index) => {
                        return <PostureElement key={index} index={index} title={item.title} image={item.image}/>
                    })
                }
                </ScrollView>
            </View>
            <View style={styles.foot}>
            </View>
        </View>
    )
    
}
export default Posture;
