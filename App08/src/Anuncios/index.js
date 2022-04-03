import React, {Component} from 'react';
import {SafeAreaView, Text, Image} from 'react-native';
import {styles} from './styles';

class Anuncios extends Component{
    render(){
      return(
        <SafeAreaView style={styles.box}>
          <Image source={{uri : this.props.data.url}}
          style={styles.imagem}
         />
          <Text style={styles.texto}> ID: {this.props.data.id}</Text>
          <Text style={styles.texto}> Nome: {this.props.data.nome} </Text>
          <Text style={styles.texto}> Endereço: {this.props.data.end} </Text>
          <Text style={styles.texto}> Pais: {this.props.data.pais} </Text>
         
        </SafeAreaView>
      );
    }
  }
 
export default Anuncios;
