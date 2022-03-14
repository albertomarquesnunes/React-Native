import React, { Component } from 'react';
import {SafeAreaView, View, Text, TextInput, Button, Pressable} from 'react-native';
import { styles } from './styles';
contadorvalor='0';
class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      contador: contadorvalor
    };
    this.clicou = this.clicou.bind(this);
   
  
  }
  
  clicou(texto){
    if (texto==='+')
    {
      contadorvalor++;
    }else{
      if(contadorvalor>0){
      contadorvalor--;
      }
    }
    
    this.setState({contador: contadorvalor});

  }
 
 

  render(){
    return(
      <SafeAreaView style={styles.container}>

        <Text style={styles.titulo}>Contador de Pessoas</Text>

        <Text style={styles.texto} > {this.state.contador} </Text>
        <Pressable style={styles.botao} onPress={() => this.clicou('+')}>
           <Text style={styles.textoBotao}>+</Text> 
        </Pressable>
        <Text />
        <Pressable style={styles.botaomenos} onPress={() => this.clicou('-')} >
          <Text style={styles.textoBotao}>-</Text> 
        </Pressable>
      </SafeAreaView>
    );
  }

 
  


}

 
export default App;
