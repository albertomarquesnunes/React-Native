import React, { useState } from 'react';
import {View, SafeAreaView, Text, StyleSheet, StatusBar,  TouchableOpacity, Modal, Image, PermissionsAndroid, Platform } from 'react-native';

import CameraRoll from '@react-native-community/cameraroll';
import * as ImagePicker from "react-native-image-picker";
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from './styles';
import Home from './src/pages/Home';
import Camera from './src/pages/Camera';
const Stack = createStackNavigator();
 
const App =()=>{
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}  options={{
                headerShown: false,
        }}/>
      <Stack.Screen name="Camera" component={Camera} options={{
        headerShown: false,
        }}/> 
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;