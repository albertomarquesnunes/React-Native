import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image} from 'react-native';
 
class App extends Component{
    
  render(){
    let nome =  "Alberto Marques Nunes";
    let Endereco =  "Rua Xavier Pinheiro, 244 cj 22";
    let Formacao1 =  "Analista Desenvolvedor de Sistemas";
    let Formacao2 =  "Cisco Systems Network Administrator - CCNA";
    let Formacao3 =  "Técnico em Eletronica";
    let projeto1 =  "App Meu Condomínio";
    let projeto2 =  "App Appromo";
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
            <Text style={{ fontSize: 15, marginLeft: 15}}>Endereço: {Endereco}</Text>

        <Text style={{ fontSize: 25, margin: 15}}>Formação</Text>
            <Text style={{ fontSize: 15, marginLeft: 15}}>{Formacao1}</Text>
            <Text style={{ fontSize: 15, marginLeft: 15}}>{Formacao3}</Text>

        <Text style={{ fontSize: 25, margin: 15}}>Projetos</Text>
            <Text style={{ fontSize: 15, marginLeft: 15}}>{projeto1}</Text>
            <Text style={{ fontSize: 15, marginLeft: 15}}>{projeto3}</Text>

      </View>
      </SafeAreaView>
    )
  }
}
 
export default App;