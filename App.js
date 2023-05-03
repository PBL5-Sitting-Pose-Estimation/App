import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useFonts} from 'expo-font'

import Login from './Pages/Login/index.js'
import BottomTab from './Pages/Components/BottomTab.js';

const Stack = createNativeStackNavigator()

function App() {
  let [fontsLoaded] = useFonts({
    'Grand Hotel': require('./Public/Fonts/GrandHotel-Regular.ttf'),
    'Nunito': require('./Public/Fonts/Nunito-ExtraBold.ttf'),
    'Nunito regular': require('./Public/Fonts/Nunito-Regular.ttf'),
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
          name="Bottom"
          component={BottomTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

