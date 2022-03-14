import React, { Component } from 'react';
import {Keyboard, SafeAreaView, Text, TextInput} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      primeiro: '',
      segundo:'',
      exibirResultado: '',
    };
    
    this.calcular = this.calcular.bind(this);

  }
 
  
  calcular(){
    if ( (this.state.primeiro === '') || (this.state.segundo === '') ){
      this.setState({exibirResultado: 'Será que não falta um n° '});
      return;
    }
    var r = this.state.primeiro * this.state.segundo
    this.setState({exibirResultado: 'Resultado: ' + r});
  }

 
  render(){
    return(
      <SafeAreaView style={styles.container}>
       
     <Text style={styles.titulo}> Multiplicador de Números </Text>
      <TextInput
        style={styles.input} keyboardType="numeric"
        placeholder="Digite o primeiro n°"
        onChangeText={(texto) => this.setState({primeiro: texto})}
      />
      <TextInput
        style={styles.input} keyboardType="numeric"
        placeholder="Digite o segundo n°"
        onChangeText={(texto) => this.setState({segundo: texto})}
      />
     
 <Pressable style={styles.botao} onPress={this.calcular}  onPressIn={() => {
      Keyboard.dismiss();
    }}>
      <Text style={styles.textoBotao}>Calcular</Text>   
 </Pressable>
 
      <Text style={styles.texto}> {this.state.exibirResultado} </Text>
      
      </SafeAreaView>
    );
  }
}
 
export default App;