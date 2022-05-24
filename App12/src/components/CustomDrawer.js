import React from 'react';
import { View, Text, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { styles } from './styles';
 
export default function CustomDrawer(props){
 
  return(
    <DrawerContentScrollView {...props} >
      <View style={styles.view} >
        <Image
        source={require('../img/minhafoto.jpg')}
        style={styles.img} 
        />
        <Text style={styles.titulo} 
        >
          Alberto Marques Nunes
        </Text>
      </View>
 
      <DrawerItemList {...props} />
 
    </DrawerContentScrollView>
  );
}
