/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import Index from './screens/Index';
import Login from './screens/Login';



const App = () => {

  const Stack = createNativeStackNavigator();


  return (
   
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Index" component={Index} />
      </Stack.Navigator>
  );
}


export default ()=>{
  return(
    <NativeBaseProvider>
      <NavigationContainer>
        <App/>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}