import React from 'react';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded) {
    return (
      <>
        <AppLoading />
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      </>
    )
  }

  return (
    <>
      <Routes />
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </>
  );
}
