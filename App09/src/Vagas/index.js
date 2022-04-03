import React, {Component} from 'react';
import {SafeAreaView, Text, Image} from 'react-native';
import {styles} from './styles';

class Vagas extends Component{
    render(){
      return(
        <SafeAreaView style={styles.box}>
          <Text style={styles.titulo}>{this.props.data.id}</Text>
          <Text style={styles.texto}> Salário: {this.props.data.salario} </Text>
          <Text style={styles.texto}> Descrição: {this.props.data.desc} </Text>
          <Text style={styles.texto}> Contato: {this.props.data.contato} </Text>
         
        </SafeAreaView>
      );
    }
  }
 
export default Vagas;
