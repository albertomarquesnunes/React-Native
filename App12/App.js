
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
 
const Drawer = createDrawerNavigator();
 
import Home from './src/pages/Home';
import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';
import CustomDrawer from './src/components/CustomDrawer';

export default function App(){
  return(
  <NavigationContainer>
    <Drawer.Navigator 
    useLegacyImplementation
    drawerContent={(props) => <CustomDrawer{...props} />}>
      <Drawer.Screen 
      name="Home" 
      component={Home} 
      options={{
        drawerItemStyle: { height: 0 },
        headerShown: false,
      }} />
      
      <Drawer.Screen 
      name="Pessoal" 
      component={Pessoal}
      options={{
        drawerItemStyle: { marginTop: 50 },
        headerShown: false,
      }}/>
      <Drawer.Screen 
      name="Formação" 
      component={Formacao}  
      options={{
      headerShown: false,
      }}/>
       <Drawer.Screen 
      name="Experiencia" 
      component={Experiencia}      
      options={{
        headerShown: false,
      }}/>
    </Drawer.Navigator>
  </NavigationContainer>
  );
}
