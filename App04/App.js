import React, { Component } from 'react';
import {Keyboard, SafeAreaView, Text, TextInput, Image,ScrollView} from 'react-native';
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
    var r = this.state.primeiro / this.state.segundo
    if (r < 0.7){
      this.setState({exibirResultado: 'Abasteça com Alcool'});
    } else{
      this.setState({exibirResultado: 'Abasteça com Gasolina'});
    }
  }

 
  render(){
    return(
      <SafeAreaView style={styles.container}>
       <ScrollView>


     <Text style={styles.titulo}> Alcool ou Gasolina </Text>
     <Image
          source={require ('./assets/aoug.jpg')}
          style={styles.estiloimagem}
         
        />
      <TextInput
        style={styles.input} keyboardType="numeric"
        placeholder="Digite o custo do Alcool"
        onChangeText={(texto) => this.setState({primeiro: texto})}
      />
      <TextInput
        style={styles.input} keyboardType="numeric"
        placeholder="Digite o custo da Gasolina"
        onChangeText={(texto) => this.setState({segundo: texto})}
      />
     
      <Pressable style={styles.botao} onPress={this.calcular}  onPressIn={() => {
            Keyboard.dismiss();
          }}>
            <Text style={styles.textoBotao}>Calcular</Text>   
      </Pressable>
 
      <Text style={styles.texto}> {this.state.exibirResultado} </Text>
      </ScrollView>
      </SafeAreaView>
    );
  }
}
 
export default App;