import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image} from 'react-native';
 
class App extends Component{
    
  render(){
    let nome =  "Alberto Marques Nunes";
    let endereco =  "Rua Xavier Pinheiro, 244 cj 22";
    let formacao1 =  "Analista Desenvolvedor de Sistemas";
    let formacao3 =  "Técnico em Eletronica";
    let projeto1 =  "App Meu Condomínio";
    let experiencia =  "35 anos na área de informática";
    let experiencia2 =  "5 anos na área de Analise de Sistemas";
    let projeto3 =  "Sistema de Automação para Empresas de Assistência Tecnica";
    return(
      <SafeAreaView>
      <View>
            
        <Image
          source={require ('./assets/foto.jpg')}
          style={{ width: 200, height: 200, alignSelf:'center', marginTop:10}}
         
        />
        <Text style={{ fontSize: 25, margin: 15}}>Dados Pessoais</Text>
            <Text style={{ fontSize: 15, marginLeft: 15}}>Nome: {nome}</Text>
            <Text style={{ fontSize: 15, marginLeft: 15}}>Endereço: {endereco}</Text>

        <Text style={{ fontSize: 25, margin: 15}}>Formação</Text>
            <Text style={{ fontSize: 15, marginLeft: 15}}>{formacao1}</Text>
            <Text style={{ fontSize: 15, marginLeft: 15}}>{formacao3}</Text>

          <Text style={{ fontSize: 25, margin: 15}}>Experiência</Text>
            <Text style={{ fontSize: 15, marginLeft: 15}}>{experiencia}</Text>
            <Text style={{ fontSize: 15, marginLeft: 15}}>{experiencia2}</Text>

        <Text style={{ fontSize: 25, margin: 15}}>Projetos</Text>
            <Text style={{ fontSize: 15, marginLeft: 15}}>{projeto1}</Text>
            <Text style={{ fontSize: 15, marginLeft: 15}}>{projeto3}</Text>

      </View>
      </SafeAreaView>
    )
  }
}
 
export default App;