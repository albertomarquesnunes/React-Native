import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image} from 'react-native';
 
class App extends Component{
    
  render(){
    let nome =  "Alberto";
    return(
      <SafeAreaView>
      <View>
        <Text>Olá Turma novamente!</Text>
        <Text>Meu Primeiro App</Text>
        <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>Tudo Perigoso</Text>
        <Image
          source={{ uri: 'https://vejasp.abril.com.br/wp-content/uploads/2016/12/ads_macgyver1.jpg'}}
          style={{ width: 300, height: 300}}
         
        />
     <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>{nome}</Text>
      </View>
      </SafeAreaView>
    )
  }
}
 
export default App;