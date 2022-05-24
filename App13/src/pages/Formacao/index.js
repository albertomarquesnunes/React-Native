import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default function Formacao() {
 return (
   <View>
     <Text style={styles.titulo}>Formação</Text>
     <Text style={styles.texto}>Técnico em Eletronica</Text>
     <Text style={styles.texto}>Cisco CCNA (redes) </Text>
     <Text style={styles.texto}>Analista de Sistemas</Text>
     <Text style={styles.texto}>LGPD Especialist</Text>
     <Text style={styles.texto}>LPI Administrator(Linux)</Text>
     <Text style={styles.texto}>DBA MsSql</Text>
   </View>
  );
}
