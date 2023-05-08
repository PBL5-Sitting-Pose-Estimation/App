import React, {useContext, useState} from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay'
import styles from './style.js'
import { AuthContext } from '../../Context/AuthContext.js';
const Register = ({navigation}) => {
    const [username, SetUsername] = useState('')
    const [password, SetPassword] = useState('')
    
    const {isLoading, register} = useContext(AuthContext)
    const checkLogic = () => {
        
    }
    return (
        <View style={styles.container}>
            <Spinner visible={isLoading}/>
            <Text style={styles.title}>
                REGISTER
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your username'
                value={username}
                onChangeText={text => SetUsername(text)}>
            </TextInput>
            <TextInput
                style={styles.input}
                placeholder='Enter your password'
                value={password}
                onChangeText={text => SetPassword(text)}
                secureTextEntry
                >

            </TextInput>
            <TouchableOpacity
                onPress={() => {
                    register(username, password)
                }}
            >
                <Text style={styles.btnRegister}>REGISTER</Text>
            </TouchableOpacity>
        </View>
    )
    
}
export default Register;
