import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useFonts} from 'expo-font'

import Login from './Pages/Login/index.js'
import Home from './Pages/Home/index.js'

const Stack = createNativeStackNavigator()

function App() {
  let [fontsLoaded] = useFonts({
    'Grand Hotel': require('./Public/Fonts/GrandHotel-Regular.ttf'),
    'Nunito': require('./Public/Fonts/Nunito-ExtraBold.ttf')
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

