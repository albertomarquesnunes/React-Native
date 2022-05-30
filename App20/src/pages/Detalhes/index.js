import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles';
 
const Detalhes = ({route}) => {

  const navigation = useNavigation();
  return(
    <SafeAreaView>
      <View >
      <Text style={styles.titulo}>App de Filmes</Text>
      <Text style={styles.titulo2}>{route.params?.nome} - Sinopse</Text>
      <View style={styles.card}>
      <Text style={styles.texto}>{route.params?.resumo}</Text>
      </View>
      </View>
      
    </SafeAreaView>
  )
}
export default Detalhes;