import React from 'react';
import {View,Text, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';


const Tabelas = ({route}) =>  {
  const navigation = useNavigation();

    function irDetalhes(){
        navigation.navigate('Detalhes',{nome: route.nome, resumo: route.sinopse});
    }

    return(
      <View style={styles.card}>
        <Text style={styles.titulo}>{route.nome}</Text>
        
        <Image
          source={{ uri: route.foto}}
          style={{ width: 150, height: 150}}

        />
         
         <Text style={styles.sobre}
        onPress={irDetalhes}>Leia mais =={'>'}</Text>
        
       
        
      </View>
    );
  }



 
export default Tabelas;
