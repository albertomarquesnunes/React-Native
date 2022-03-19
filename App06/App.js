import React, { Component } from 'react';
import {Keyboard, SafeAreaView, Text, TextInput, Image,ScrollView} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
         exibirResultado: '',
    };
    
    this.calcular = this.calcular.bind(this);

  }
 
  
  calcular(){
    
    var r = Math.floor(Math.random() * 11);
   
      this.setState({exibirResultado: r});
    
  }

 
  render(){
    return(
      <SafeAreaView style={styles.container}>
       <ScrollView>


     <Text style={styles.titulo}> Jogo do N° Aleatório </Text>
     <Image source={require ('./assets/interrog.jpg')}
          style={styles.estiloimagem}
       />
     <Text style={styles.texto}> Pense em um n° de 0 a 10 </Text>
     <Text style={styles.textoresultado}> {this.state.exibirResultado} </Text>
      <Pressable style={styles.botao} onPress={this.calcular}  >
            <Text style={styles.textoBotao}>Descobrir</Text>   
      </Pressable>
 
      
      </ScrollView>
      </SafeAreaView>
    );
  }
}
 
export default App;