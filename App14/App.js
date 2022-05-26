import React, { Component } from 'react'
import {SafeAreaView, View,  Switch, Text, StyleSheet, Pressable, TouchableOpacity, Keyboard} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import colors from './colors';
import fonts from './fonts';
import metrics from './metrics';
import general from './general';
import { RollInRight } from 'react-native-reanimated';
export default class App extends Component{
 
  constructor(props){
    super(props);
    this.state = {
      botaoDia: '',
      botaoPequeno: '',
      nome: '',
      background: '', 
      fontSize: 0,
    };
    this.gravaNome=this.gravaNome.bind(this);
    this.gravaDia = this.gravaDia.bind(this);
    this.gravaPequeno = this.gravaPequeno.bind(this);
   
  }
 
  // Quando o componente é montado em tela (quando abrimos o App)
  async componentDidMount(){
    try{
    await AsyncStorage.getItem('nome').then((value)=> {
      if(value!=='A vingança nunca é plena, mata a alma e envenena (seu Madruga)'){
        value='A vingança nunca é plena, mata a alma e envenena (seu Madruga)';
      }
       this.setState({nome: value});
      
    })
    await AsyncStorage.getItem('botaoDia').then((value)=> {
      var isTrueSet = (value === 'true');
      this.setState({botaoDia: isTrueSet});
      if(isTrueSet){
        this.setState({
        background: '#fff'}
        );
      }else{
        this.setState({
          background: '#ccc'});
      }
    })
    await AsyncStorage.getItem('botaoPequeno').then((value)=> {
      var isTrueSet = (value === 'true');
      this.setState({botaoPequeno: isTrueSet});
      if(isTrueSet){
        this.setState({
        fontSize: 20}
        );
      }else{
        this.setState({
          fontSize: 40}
          );
      }
    })
  }catch(e){
    console.log(e);
  }
 
  }
  



 
  // Toda vez que um state é atualizado
  async componentDidUpdate(_, prevState){
   
    const botaoDia = this.state.botaoDia;
    const botaoPequeno = this.state.botaoPequeno;
    const nome = this.state.nome;
 
    if(prevState !== nome){
      await AsyncStorage.setItem('nome', nome);
    }

   
    if(prevState !== botaoDia){
      await AsyncStorage.setItem('botaoDia', botaoDia.toString());
    }
    if(prevState !== botaoPequeno){
      await AsyncStorage.setItem('botaoPequeno', botaoPequeno.toString());
    }

  }
 gravaDia(valor){
   var fundo='#fff';
   if(valor){
    fundo='#fff';
    
   }else{
    fundo='#ccc';
    
   }
   console.log('dia => '+fundo);
    this.setState({
      botaoDia: valor, 
      background: fundo,
    })
  
 }
  
 gravaPequeno(valor){
  var tamanho;
  if(valor){
   tamanho=20;
  }else{
  tamanho=40;
   
  }
 
    this.setState({
      botaoPequeno: valor,
      fontSize: tamanho,
    })
    
 }
 gravaNome(){
  this.setState({
    nome: 'A vingança nunca é plena, mata a alma e envenena (seu Madruga)',
  });
 
}


//style={styles.viewInput}
 
  render(){
  
    return(
      <SafeAreaView style={styles.container}>
        <View>
        <View style={{width: 350, height: 150}}>
        <Text style={general.sectionTitle}>Frases</Text>
        </View>
       <View style={{width: 350, height: 80}}>
      <View style={styles.viewInput1} >
        <Text style={styles.texto}>Dia</Text>
      <Switch style={styles.viewInput} thumbColor='orange' trackColor={{false:'red',true:'green'}}
        value={this.state.botaoDia}
        onValueChange={ (valorDia) => this.gravaDia(valorDia)}
        /> 
        <Text style={styles.texto}>Pequeno</Text>
        <Switch  thumbColor='orange' trackColor={{false:'red',true:'green'}}
        value={this.state.botaoPequeno}
        onValueChange={(valor)=>this.gravaPequeno(valor)}
        /> 
        </View>
      </View>
      <View style={{
        backgroundColor: this.state.background,
        marginTop: 15,
        textAlign: 'center',
        width: 350, 
        height: 250
         }}>
      <Text style={{
        marginTop: 15,
        textAlign: 'center',
        fontSize: this.state.fontSize}
        }>{this.state.nome}</Text>
      </View>
     
      
      </View>
      </SafeAreaView>    
    );
 
  }
 
}
 
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    marginBottom: 20,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
   
    color: '#000000',
    flexDirection: 'row',
    fontSize: 20,
     
  },
  section: {
    margin: metrics.doubleBaseMargin,
    
     height: 200,
   borderWidth: 2,
   padding: 10,
  },
  sectionTitle: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: fonts.regular,
    alignSelf: 'center',
  },
  viewInput:{
    flex:0.4,
    flexDirection: 'row',
    borderColor:'#fff',
   borderTopColor:'#000000',
   borderWidth: 2,
   padding: 10,
  },
  viewInput1:{
    flex:0.4,
    flexDirection: 'row',
    
    borderColor:'#fff',
   borderTopColor:'#000000',
   borderWidth: 2,
   padding: 10,
  },
  titulo2:{
    color: '#0000ff',
    textAlign: 'left',
    textAlignVertical:'center',
    height: 80,
    margin: 5,
    fontSize: 30,
    fontWeight:"bold"
   
  },
  input:{
    width: 350,
    height: 40,
    borderColor: '#cecece',
    borderWidth: 10,
    padding: 10,
    
  },
  botao:{
    backgroundColor: '#222',
    color: '#00F',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome:{
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center',
    
  }
});
