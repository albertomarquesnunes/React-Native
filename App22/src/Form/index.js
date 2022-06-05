import React, {Component, useState} from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api';
 
export default function Form({route}) {
  const [id, setId] = useState(route.params?.id)
  const [newNome, setNewNome] = useState(route.params?.nome)
  const [newCurso, setNewCurso] = useState(route.params?.curso)
  const [newTelefone, setNewtelefone] = useState(route.params?.telefone)
 
  const navigation = useNavigation();

  const salvarTarefa = async () => {
   
  
  
    if (id !== undefined){
      const body = JSON.stringify({id: id, nome: newNome, curso: newCurso, telefone:newTelefone});
     
      const response = await api.put('index.php',body, {headers: {'Content-Type': 'application/json'}});
      await route.params?.atualizarLista()
    }
    else{
      const body = JSON.stringify({nome: newNome, curso: newCurso, telefone:newTelefone});
      const response = await api.post('index.php',body, {headers: {'Content-Type': 'application/json'}});
     
      await route.params?.atualizarLista()
    }
 
    navigation.goBack()  
  }
 
 return (
   <View>
     <Text>Nome</Text>
     <TextInput
        style={styles.input}
        defaultValue={route.params?.nome}
        onChangeText={(text)=> setNewNome(text)}
      />
    <Text>Curso</Text>
      <TextInput
        style={styles.input}
        defaultValue={route.params?.curso}
        onChangeText={(text)=> setNewCurso(text)}
      />
      <Text>Telefone</Text>
       <TextInput
        style={styles.input}
        defaultValue={route.params?.telefone}
        onChangeText={(text)=> setNewtelefone(text)}
      />
 
      <Button title="Salvar" onPress={salvarTarefa} />
 
   </View>
  );
}
 
const styles = StyleSheet.create({
  input:{
    width: 350,
    height: 40,
    borderColor: '#DDD',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF',
    margin: 4,
  }
});
