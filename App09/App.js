import React, { Component } from 'react';
import { SafeAreaView, Text, FlatList, ScrollView } from 'react-native';
import { styles } from './styles';
import Vagas from './src/Vagas';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {
          salario: "R$ 15.000,00",
          desc: "Domínio em Flutter, Domínio bancos de dados(SQLServer e Oracle), Domínio Java, Domínio da metodologia ágil (Scrum), Inglês Técnico, Formação Superior em Ciência da Computação.",
          contato: "desnvolvedor@molemole.pt",
          id: "Desenvolvedor Backend"
        },
        {
          
          salario: "R$ 15.000,00",
          desc: "Domínio em Flutter, Domínio bancos de dados(SQLServer e Oracle), Domínio Java, Domínio da metodologia ágil (Scrum), Inglês Técnico, Formação Superior em Ciência da Computação.",
         contato: "vendedor@tevira.com.br",
          id: "Engenheiro de dados"
        },
        {
          
          salario: "R$ 900,00",
          desc: "Flutter, Metodologia ágil(Scrum), Bancos de dados(SQLServer e Oracle), Java, C#, React, PHP, Inglês Técnico, Formação Superior em Ciência da Computação, Desejável assobiar e chupar cana ao mesmo tempo que como farinha",
          contato: "coitado@sorecebecomissao.pt",
          id: "Estagiário"
        },
        {
          
          salario: "R$ 1.500,00",
          desc: "Domínio em C#, Java,F#, Laravel,Haskell,SAP, Domínio bancos de dados SQL(todos), Domínio Scrum, Inglês Técnico, Formação Superior em Ciência da Computação.",
          contato: "sabetudo@enaorecebenada.com",
          id: "Desenvolvedor trainee"
        },
        {
          
          salario: "R$ 5.500,00",
          desc: "Domínio em C#, Java,F#, Laravel,Haskell,SAP,PHP,React-Native, UX, Domínio bancos de dados SQL(todos), Domínio Scrum, Inglês Técnico, Formação Superior em Ciência da Computação.",
          contato: "urgencia@pegatroxa.com.tv",
          id: "Desenvolvedor Frontend"
        }
       
      ]        
     
    }
  }


  render(){
    return(
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Vagas</Text>
        <FlatList  horizontal={false}
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Vagas data={item}/>}
        />
      </SafeAreaView>
    )
  }
}

 

 
export default App;
