import React, { Component  } from "react";
import { View,Text, StatusBar, SafeAreaView, TextInput , Pressable } from 'react-native';
import dismissKeyboard from "react-native/Libraries/Utilities/dismissKeyboard";
import {styles} from './styles';

  

export default class App extends Component {
  
 state ={
   cep:'',
   dados:{
     logradouro:'',
     uf:'',
     bairro:'',
     localidade:'',
   }
 }

 procuraCep=()=>{
  

   if (this.state.cep!=='' && this.state.cep.length>7 && this.state.cep.length<=9){
     fetch('https://viacep.com.br/ws/'+this.state.cep+'/json/')
     .then(res => res.json())
    .then(data=>{
     this.setState({dados: data});
     console.log(data);  
     this.setState({cep:''})
   }).catch(erro =>{
     console.log(erro);
   });
  } else{
    alert('informe um cep valido!');
  }
 };

render(){
return(
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor="#222" />
          <View>
            <Text style={styles.titulo2}>Cep x Endereço</Text>
          </View>
          
          <View style={styles.viewInput}>
          <TextInput 
          style={styles.input} 
          value={this.state.cep}
          keyboardType="numeric"
          onChangeText={cep=>this.setState({cep}) }  />
         <Pressable  style={styles.botao} onPress={this.procuraCep} ></Pressable>
       
          </View>
        <View style={styles.section}>
          <Text style={styles.texto}> Cep: {this.state.dados.cep} </Text>
          <Text style={styles.texto}> Endereço: {this.state.dados.logradouro} </Text>
          <Text style={styles.texto}> Bairro: {this.state.dados.bairro} </Text>
          <Text style={styles.texto}> Cidade: {this.state.dados.localidade} </Text>
          <Text style={styles.texto}> Estado: {this.state.dados.uf} </Text>
          </View>
        </SafeAreaView>
      )
    }
  }

    

