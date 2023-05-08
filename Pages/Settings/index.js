import React, {useContext, useState} from 'react';
import { Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
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
            <Button title="Logout" color="red" onPress={logout} />
        </View>
    )
    
}
export default Settings;
