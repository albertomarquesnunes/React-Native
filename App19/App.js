import React from "react";
import {ScrollView, SafeAreaView ,Text} from "react-native";
import { styles } from "./styles";
import Conversor from "./src/conversor";
import {Picker} from '@react-native-picker/picker';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       MoedaA: 0,
        MoedasA: [
          {nome: 'Dólar', sigla:'USD'},
          {nome: 'Euro', sigla:'EUR'},
          {nome: 'Real', sigla:'BRL'}
               ],
      MoedaB: 0,
        MoedasB: [
          {nome: 'Real', sigla:'BRL'},
          {nome: 'Dólar', sigla:'USD'},
          {nome: 'Euro', sigla:'EUR'}
         
          ]
   };
  
}


  render() {
    let MoedaAItem = this.state.MoedasA.map( (valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome} />
    })
    let MoedaBItem = this.state.MoedasB.map( (valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome} />
    })
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
         <Text style={styles.title} >
        Conversor de Moedas Dólar, Real e Euro
        </Text>
       
    <Text style={styles.texto}>De:</Text>
    <Picker style={styles.picker} itemStyle={styles.pickerItem} selectedValue={this.state.MoedaA}
    onValueChange={ (itemValue, itemIndex) => this.setState({MoedaA: itemValue}) }
    >
           {MoedaAItem}
    </Picker>
    
    <Text style={styles.texto}>Para: </Text>
      <Picker style={styles.picker} itemStyle={styles.pickerItem} selectedValue={this.state.MoedaB}
      onValueChange={ (itemValue, itemIndex) => this.setState({MoedaB: itemValue}) }
      >
             {MoedaBItem}
       </Picker>
     
        <Conversor coinA={this.state.MoedasA[this.state.MoedaA].sigla} coinB={this.state.MoedasB[this.state.MoedaB].sigla} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

