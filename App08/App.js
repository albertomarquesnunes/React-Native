import React, { Component } from 'react';
import { SafeAreaView, Text, FlatList, ScrollView } from 'react-native';
import { styles } from './styles';
import Anuncios from './src/Anuncios';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {
          url: "https://http.cat/504.jpg",
          nome: "Ivor Whitley",
          end: "Ap 704-8862 Fringilla Avenue",
          pais: "Spain",
          id: 1
        },
        {
          url: "https://http.cat/410",
          nome: "Raya Newman",
          end: "542-6319 Vivamus Road",
          pais: "United States",
          id: 2
        },
        {
          url: "https://http.cat/402",
          nome: "Steven Mosley",
          end: "Ap 716-7116 Ante Avenue",
          pais: "Norway",
          id: 3
        },
        {
          url: "https://http.cat/415",
          nome: "Hoyt Herrera",
          end: "Ap 448-9463 Nisi. Rd.",
          pais: "France",
          id: 4
        },
        {
          url: "https://http.cat/421",
          nome: "Channing Davenport",
          end: "8336 Imperdiet St.",
          pais: "Russian Federation",
          id: 5
        },
        {
          url: "https://http.cat/305",
          nome: "Brielle Black",
          end: "P.O. Box 604, 5336 Montes, Ave",
          pais: "Mexico",
          id: 6
        },
        {
          url: "https://http.cat/301",
          nome: "Jesse Watson",
          end: "Ap 544-7748 Diam. Road",
          pais: "Norway",
          id: 7
        },
        {
          url: "https://http.cat/451",
          nome: "Amelia Newman",
          end: "Ap 769-8285 Facilisis. Av.",
          pais: "Italy",
          id: 8
        },
        {
          url: "https://http.cat/499",
          nome: "Declan Gonzalez",
          end: "8777 Eget Avenue",
          pais: "Chile",
          id: 9
        },
      
        {
          url: "https://http.cat/102",
          nome: "Sigourney Wise",
          end: "Ap 697-8251 Eleifend. Road",
          pais: "New Zealand",
          id: 11
        },
        {
          url: "https://http.cat/101",
          nome: "Hammett Martin",
          end: "8349 Enim Rd.",
          pais: "Ukraine",
          id: 12
        },
        {
          url: "https://http.cat/414",
          nome: "Jorden Austin",
          end: "3400 Scelerisque, Street",
          pais: "Nigeria",
          id: 14
        },
        {
          url: "https://http.cat/405",
          nome: "Barclay Dyer",
          end: "P.O. Box 181, 7197 Leo, Ave",
          pais: "Ireland",
          id: 15
        },
      
        {
          url: "https://http.cat/401",
          nome: "Cassidy Riddle",
          end: "P.O. Box 853, 7353 Rhoncus Rd.",
          pais: "Colombia",
          id: 17
        },
        {
          url: "https://http.cat/305",
          nome: "Destiny Sherman",
          end: "Ap 155-7643 Ac Street",
          pais: "Vietnam",
          id: 18
        },
        {
          url: "https://http.cat/307",
          nome: "Finn Stephenson",
          end: "681-2353 Odio. Road",
          pais: "Chile",
          id: 20
        }
        ]        
     
    }
  }


  render(){
    return(
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Anúncios</Text>
        <FlatList horizontal={true}
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Anuncios data={item}/>}
        />
      </SafeAreaView>
    )
  }
}

 

 
export default App;
