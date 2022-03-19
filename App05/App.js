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
    var r = this.state.primeiro / Math.pow(this.state.segundo,2)
    if(r < 18.5){
      this.setState({exibirResultado: 'Abaixo do Peso'});
    }else if (r >=18.5 && r <= 24.9){
      this.setState({exibirResultado: 'Peso Normal'});
    }else if (r >= 25 && r <= 29.9){
      this.setState({exibirResultado: 'Sobrepeso'});
    }else if (r >=30 && r <= 34.9){
      this.setState({exibirResultado: 'Obesidade Grau I'});
    }else if (r >= 35 && r <= 39.9){
      this.setState({exibirResultado: 'Obesidade Grau II'});
    }else{
      this.setState({exibirResultado: 'Obesidade Grau III ou Mórbida'});
    }
  }

 
  render(){
    return(
      <SafeAreaView style={styles.container}>
       <ScrollView>


     <Text style={styles.titulo}> Cálculo do IMC </Text>
     <Image
          source={require ('./assets/imc.png')}
          style={styles.estiloimagem}
         
        />
      <TextInput
        style={styles.input} keyboardType="numeric"
        placeholder="Peso"
        onChangeText={(texto) => this.setState({primeiro: texto})}
      />
      <TextInput
        style={styles.input} keyboardType="numeric"
        placeholder="Altura"
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