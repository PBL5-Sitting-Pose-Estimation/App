import React, {createContext, useEffect, useState} from 'react'
import axios from "axios"
import { API_URL } from '../Utils/constants.js'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [username, SetUsername] = useState('')
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
                SetUsername(username)
                SetUserInfo(userInfo)
                AsyncStorage.setItem('username', username)
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

        // axios
        //     .post(API_URL + 'auth/login', {
        //         username,
        //         password
        //     })
        //     .then(res => {
        //         let userInfo = res.data
        //         console.log(userInfo)
        //         SetUserInfo(userInfo)
        //         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
        //         SetIsLoading(false)
        //     })
        //     .catch(e => {
        //         console.log(`login error: ${e}`)
        //         SetIsLoading(false)
        //     })

        return fetch(API_URL + 'auth/login', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({username: username, password: password}), // body data type must match "Content-Type" header
        })
        .then(res => res.json())
        .then(res => {
            if(res.success){
                let userInfo = {"access_token":res.access_token}
                console.log(userInfo)
                SetUsername(username)
                SetUserInfo(userInfo)
                AsyncStorage.setItem('username', username)
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
            }
            else{
                console.log(res.message)
            }
            SetIsLoading(false)
        })
        .catch(e => {
            console.log(`login error: ${e}`)
            SetIsLoading(false)
        })
    }

    const logout = () => {
        SetIsLoading(true)

        AsyncStorage.removeItem('username')
        AsyncStorage.removeItem('userInfo')
        SetUsername('')
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
            let username = await AsyncStorage.getItem('username')

            if(userInfo){
                SetUserInfo(userInfo)
            }
            if(username){
                SetUsername(username)
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
                username,
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
