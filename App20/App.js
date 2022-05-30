import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Home from './src/pages/Home';
import Detalhes from './src/pages/Detalhes';
import Tabelas from './src/pages/Tabelas';
 
const Stack = createStackNavigator();
 
const App = () =>{
  return(
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen name="Home" component={Home}
        options={{
          headerShown: false,
        }}
        />
        
        <Stack.Screen name="Detalhes"  component={Detalhes}
        options={{
          headerShown: false,
          }}
          />
          <Stack.Screen name="Tabelas"  component={Tabelas}
        options={{
          headerShown: false,
          }}
        />
 
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}
export default App;