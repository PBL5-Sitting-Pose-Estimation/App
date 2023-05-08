import React, {createContext, useEffect, useState} from 'react'
import axios from "axios"
import { API_URL } from '../Utils/constants.js'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [userInfo, SetUserInfo] = useState({})
    const [isLoading, SetIsLoading] = useState(false)
    const [splashLoading, SetSplashLoading] = useState(false)

    const register = (username, password) => {
        SetIsLoading(true)
        axios
            .post(API_URL + 'auth/register', {
                username: username,
                password: password
            })
            .then(res => {
                let userInfo = res.data
                SetUserInfo(userInfo)
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
                SetIsLoading(false)
                console.log(userInfo)
            })
            .catch(e => {
                console.log(`register error ${e}`)
                SetIsLoading(false)
            })
    }

    const login = (username, password) => {
        SetIsLoading(true)

        axios
            .post(API_URL + 'auth/login', {
                username,
                password
            })
            .then(res => {
                let userInfo = res.data
                console.log(userInfo)
                SetUserInfo(userInfo)
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
                SetIsLoading(false)
            })
            .catch(e => {
                console.log(`login error: ${e}`)
                SetIsLoading(false)
            })
    }

    const logout = () => {
        SetIsLoading(true)

        AsyncStorage.removeItem('userInfo')
        SetUserInfo({})
        SetIsLoading(false)
        // axios.post(API_URL + '/logout', 
        // {},
        // {
        //     headers: {Authorization: `Bearer ${userInfo.access_token}`},
        // }
        // ).then(res => {
        //     console(res.data)
        //     AsyncStorage.removeItem('userInfo')
        //     SetUserInfo({})
        //     SetIsLoading(false)
        // }).cacht(e => {
        //     console.log(`logout error: ${e}`)
        //     SetIsLoading(false)
        // })
    }
    const isLoggedIn = async () => {
        try{
            SetSplashLoading(true)

            let userInfo = await AsyncStorage.getItem('userInfo')
            userInfo = JSON.parse(userInfo)

            if(userInfo){
                SetUserInfo(userInfo)
            }

            SetSplashLoading(false)

        }catch(e){
            SetSplashLoading(false)
            console.log('check logged in error: ', e)
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])

    return (
        <AuthContext.Provider 
            value={{
                isLoading,
                userInfo,
                splashLoading,
                register,
                login,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    )
}
