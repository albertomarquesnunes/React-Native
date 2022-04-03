import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView,TextInput, Text,Pressable, Switch } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { styles } from './styles';

class App extends Component{

  
   constructor(props){
      super(props);
      this.state = {
        nome: '',
        idade:'',
        limite: 0,
        status: false,

        sexo: 0,
          sexos: [
            {nome: 'Masculino'},
            {nome: 'Feminino'}
                 ],
        escolaridade: 0,
          nivel: [
            {nome: 'Não alfabetizado'},
            {nome: 'Fundamental incompleto'},
            {nome: 'Fundamental completo'},
            {nome: 'Médio incompleto'},
            {nome: 'Ensino médio completo'},
            {nome: 'Superior incompleto'},
            {nome: 'Superior completo'},
            {nome: 'Pós-graduação'},
            {nome: 'Mestrado'},
            {nome: 'Doutorado'}
              ]

     };
    
     this.entrar = this.entrar.bind(this);
     
  }

  entrar(){
    this.setState({
      exibirNome: this.state.nome ,
      exibirIdade: this.state.idade,
      exibirSexo: this.state.sexos[this.state.sexo].nome,
      exibirEscolaridade: this.state.nivel[this.state.escolaridade].nome,
      exibirLimite:"R$ "+ this.state.limite.toFixed(2),
      exibirBrasileiro: this.state.status
    });

  }
  

 
  render(){
    let sexoItem = this.state.sexos.map( (valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome} />
    })
    let escolaridadeItem = this.state.nivel.map( (valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome} />
    })
    return(
      <SafeAreaView style={styles.container}>
       <ScrollView>
     <Text style={styles.titulo}> Abertura de Conta </Text>
     <Text style={styles.texto}>
        Nome:
      </Text>
      <TextInput
        style={styles.input} 
        onChangeText={(texto) => this.setState({nome: texto})}
     />
      <Text style={styles.texto}   >
       Idade:
      </Text>
      <TextInput
        style={styles.input} keyboardType="numeric"
        onChangeText={(texto) => this.setState({idade: texto})}
        
      />
       <Text style={styles.texto}>
       Sexo:
      </Text>
      <Picker style={styles.combobox} selectedValue={this.state.sexo}
      onValueChange={ (itemValue, itemIndex) => this.setState({sexo: itemValue}) }
      >
             {sexoItem}
 
      </Picker>
    
      <Text style={styles.texto}>
       Escolaridade:
      </Text>
      <Picker style={styles.picker} itemStyle={styles.pickerItem} selectedValue={this.state.escolaridade}
      onValueChange={ (itemValue, itemIndex) => this.setState({escolaridade: itemValue}) }
      >
             {escolaridadeItem}
 
      </Picker>
      <Text style={styles.texto}>
       Limite:
      </Text>
      <Slider
      minimumValue={0}
      maximumValue={10000}
      step={0.5}
      onValueChange={ (valorSelecionado) => this.setState({limite: valorSelecionado})}
      value={this.state.limite}

    />
      <Text style={styles.texto}>
      R$ {this.state.limite.toFixed(2)}
    </Text>
     <Text style={styles.texto}>
       Brasileiro:
      </Text>
   <Switch thumbColor='orange' trackColor={{false:'red',true:'green'}}
      value={this.state.status}
      onValueChange={ (valorSwitch) => this.setState({status: valorSwitch})}
      />
     
      <Pressable style={styles.botao} onPress={this.entrar} >
            <Text style={styles.textoBotao}>Confirmar</Text>   
      </Pressable>
 
      
      <Text style={styles.titulo2}>
       Dados Informados:
      </Text>
      <Text style={styles.texto}>
       Nome: {this.state.exibirNome}
      </Text>
      <Text style={styles.texto}>
       Idade: {this.state.exibirIdade}
      </Text>
      <Text style={styles.texto}>
       Sexo: {this.state.exibirSexo}
      </Text>
      <Text style={styles.texto}>
       Escolaridade: {this.state.exibirEscolaridade}
      </Text>
      <Text style={styles.texto}>
       Limite:  {this.state.exibirLimite}
      </Text>
      <Text style={styles.texto}>
       Brasileiro:  {(this.state.exibirBrasileiro)? "Sim":"Não"}
      </Text>
      </ScrollView>
      </SafeAreaView>
    );
  }
}


export default App;