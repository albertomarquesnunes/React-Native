import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Home from './src/pages/Home';
import Resultado from './src/pages/Resultado';
 
const Stack = createStackNavigator();
 
const App = () => {
  
  return(
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}  options={{
                 headerShown: false,
        }}/>
        
        <Stack.Screen name="Resultado" component={Resultado} options={{
                 headerShown: false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;