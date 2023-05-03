import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../Home/index'
import Camera from '../Camera/index'

const Tab = createBottomTabNavigator()

const BottomTab = ({navigation}) => {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false, 
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    height: 80,
                    ... styles.shadow
                }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image
                                source={require('../../Public/home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text
                                style={{color: focused ? '#e32f45' : '#748c94'}}>
                                    HOME
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Posture" 
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image
                                source={require('../../Public/posture.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text
                                style={{color: focused ? '#e32f45' : '#748c94'}}>
                                    POSTURE
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Camera" 
                component={Camera}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={require('../../Public/camera.png')}
                            resizeMode='contain'
                            style={{
                                width: 50,
                                height: 50
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TouchableOpacity
                                style={{
                                    top: -20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    ...styles.shadow
                                }}
                                onPress={props.onPress}
                            >
                                <View style={{
                                    width: 80,
                                    height: 80,
                                    borderWidth: 1,
                                    borderRadius: 100,
                                    backgroundColor: 'white'
                                }}>
                                    {props.children}
                                </View>
                        </TouchableOpacity>
                    ),
                    tabBarStyle:{display:'none'}
                }}
            />
            <Tab.Screen 
                name="History" 
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image
                                source={require('../../Public/history.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text
                                style={{color: focused ? '#e32f45' : '#748c94'}}>
                                    HISTORY
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 3}}>
                            <Image
                                source={require('../../Public/settings.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text
                                style={{color: focused ? '#e32f45' : '#748c94'}}>
                                    SETTINGS
                            </Text>
                        </View>
                    )
                }}
            />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7F5DF0',
        shadowOffset:{
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5


    }
})

export default BottomTab