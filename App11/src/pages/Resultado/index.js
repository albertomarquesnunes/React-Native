import React  from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const Resultado = ({route}) => {
  
  const navigation = useNavigation();
 return (
   <View>
   
    <Text style={styles.titulo2}>
       Dados Informados:
      </Text>
      <Text style={styles.texto}>
       Nome: {route.params?.nome}
      </Text>
      <Text style={styles.texto}>
       Idade: {route.params?.idade}
      </Text>
      <Text style={styles.texto}>
       Sexo: {route.params?.sexo}
      </Text>
      <Text style={styles.texto}>
       Escolaridade: {route.params?.escolaridade}
      </Text>
      <Text style={styles.texto}>
       Limite: R$ {route.params?.limite.toFixed(2)}


      </Text>
      <Text style={styles.texto}>
       Brasileiro:  {(route.params?.brasileiro)? "Sim":"Não"}
      </Text>
  
   <Pressable style={styles.botao}
      title='Voltar para tela Home'
      onPress={ () => navigation.goBack() }
      >
   <Text   style={styles.textoBotao}>Voltar </Text> 
   </Pressable>
 </View>
  );
}
export default Resultado;

