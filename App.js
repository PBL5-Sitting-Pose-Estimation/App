import React from 'react';
import {useFonts} from 'expo-font'
import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from './Context/AuthContext.js';
import Navigation from './Pages/Components/Navigation.js'

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
    <AuthProvider>
      <StatusBar backgroundColor='#06bcee' />
      <Navigation />
    </AuthProvider>
  )
}

export default App