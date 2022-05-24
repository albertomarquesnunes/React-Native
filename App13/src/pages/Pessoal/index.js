import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
 
export default function Pessoal() {
 return (
   <View>
     <Text style={styles.titulo}>Pessoal</Text>
     <Text style={styles.texto}>Nome: Alberto Marques Nunes</Text>
     <Text style={styles.texto}>Endereço: Rua Caragua, 286 </Text>
     <Text style={styles.texto}>Idade: 54 anos</Text>
     <Text style={styles.texto}>Estado Civil: Casado</Text>
     <Text style={styles.texto}>Filhos: 2</Text>
     <Text style={styles.texto}>Nacionalidade: Brasileira</Text>
   </View>
  );
}
