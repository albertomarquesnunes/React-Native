import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
 
export default function Experiencia() {
 return (
   <View>
     <Text style={styles.titulo}>Experiencia</Text>
     <Text style={styles.texto} >Programador C#, PHP, Web </Text>
     <Text style={styles.texto}>Manutenção em Computadores (35 anos)</Text>
     <Text style={styles.texto}>Administrador de Redes </Text>
     <Text style={styles.texto}>Administração em Servidores Windows/Linux</Text>
     <Text style={styles.texto}>Empreendedor desde 1996</Text>
     <Text style={styles.texto}>Prologica - técnico em Eletronica</Text>
     <Text style={styles.texto}>Vip - Conserto de TV</Text>
     <Text style={styles.texto}>Estágio Telesp - Eletronica</Text>
   </View>
  );
}
