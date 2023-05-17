import React, {useContext, useState} from 'react';
import { Text, View, TouchableOpacity, Linking, TextInput, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay'
import { AuthContext } from '../../Context/AuthContext.js';
import styles from './style.js'

const Login = ({navigation}) => {
    const [username, SetUsername] = useState('')
    const [password, SetPassword] = useState('')

    const {isLoading, login} = useContext(AuthContext)
    const checkLogic = () => {
        
    }

    return (
        <View style={styles.container}>
            <Spinner visible={isLoading}/>
            <TouchableOpacity 
                style={styles.backContainer}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={require('../../Public/back.png')}
                    style={styles.backBtn}
                />
            </TouchableOpacity>
            <Text style={styles.title}>
                LOGIN
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Username'
                value={username}
                onChangeText={text => SetUsername(text)}>

            </TextInput>
            <TextInput
                style={styles.input}
                placeholder='Password'
                value={password}
                onChangeText={text => SetPassword(text)}
                secureTextEntry
                >

            </TextInput>
            <TouchableOpacity
                onPress={() => login(username, password)}
                style={styles.btnLogin}
            >
                <Text style={styles.txtLogin}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={[styles.linkRegister, {color: 'blue'}]}
                onPress={() => Linking.openURL('http://google.com')}>
                Forget password?
            </Text>
        </View>
    )
    
}
export default Login;
