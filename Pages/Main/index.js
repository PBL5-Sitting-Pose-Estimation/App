import * as React from 'react';
import { Button, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './style.js'
const Main = ({navigation}) => {
    const checkLogic = () => {
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.title}>
                    Pose
                    <Text style={[styles.title, {color:'#8F9FBF'}]}>
                        e
                    </Text>
                </Text>
            </View>
            <View style={styles.centerImage}>
                <Image style={styles.image} source={require('../../Public/main_background.png')}/>
            </View>
            <View style={styles.foot}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.btnLogin}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.btnRegister}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    
}
export default Main;
