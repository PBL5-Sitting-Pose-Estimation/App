import React, {useContext, useState} from 'react';
import { Text, View, TouchableOpacity, ScrollView, Button } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay'
import styles from './style.js'
import { AuthContext } from '../../Context/AuthContext.js';
const Settings = ({navigation}) => {
    const {userInfo, isLoading, logout} = useContext(AuthContext)
    const checkLogic = () => {
        
    }

    return (
        <View style={styles.container}>
            <Spinner visible={isLoading}/>
            <ScrollView style={styles.scroll}>
                <TouchableOpacity
                    onPress={() => console.log('Doing...')}>
                    <Text style={styles.button}>Change password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Doing...')}>
                    <Text style={styles.button}>Change time between detect times</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Doing...')}>
                    <Text style={styles.button}>Turn off the warning sound</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Doing...')}>
                    <Text style={styles.button}>Turn on the notification light</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={logout}>
                    <Text style={styles.button}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
            
        </View>
    )
    
}
export default Settings;
