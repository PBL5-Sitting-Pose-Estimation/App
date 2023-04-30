import * as React from 'react';
import { Button, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './style.js'
const Login = ({navigation}) => {
    const checkLogic = () => {
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text>
                    Posee
                </Text>
            </View>
            <View style={styles.centerImage}>
                <Image style={styles.image} source={require('../../Public/login_background.png')}/>
            </View>
            <View style={styles.foot}>
                <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.btnLogin}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.btnRegister}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    
}
export default Login;
