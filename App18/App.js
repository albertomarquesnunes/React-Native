import React, { Component  } from 'react';
import { View,Text, StatusBar, SafeAreaView, TextInput , Pressable, Image } from 'react-native';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {styles} from './styles';

  

export default class App extends Component {
  
 state = {
   nome:'',
   dados: {
    login: '',
    id: '',
    node_id: '',
    avatar_url: 'https://avatars.githubusercontent.com/u/9919?s=200&v=4',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url:'',
    following_url:'',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url:'',
    received_events_url: '',
    type: '',
    site_admin: '',
    name: '',
    company: '',
    blog: '',
    location: '',
    email: '',
    hireable: '',
    bio: '',
    twitter_username: '',
    public_repos: '',
    public_gists: '',
    followers: '',
    following: '',
    created_at: '',
    updated_at: '',
   }
  }

 procuraDev=()=>{
  

   if (this.state.nome!==''){
     fetch('https://api.github.com/users/'+this.state.nome)
     .then(res => res.json())
    .then(data=>{
     this.setState({dados: data});
     console.log(data);  
     this.setState({nome:''})
   }).catch(erro =>{
     console.log(erro);
   });
  } else{
    alert('informe um usuario valido!');
  }
 };

render(){
return(
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor='#222' />
          <View>
            <Text style={styles.titulo2}>Perfil dos Devs</Text>
          </View>
          <Image
          source={{ uri: this.state.dados.avatar_url}}
          style={{ width: 150, height: 150}}
         
        />
          <View style={styles.viewInput}>
          <TextInput 
          style={styles.input} 
          value={this.state.nome}
          keyboardType='numeric'
          onChangeText={nome=>this.setState({nome}) }  />
         <Pressable  style={styles.botao} onPress={this.procuraDev} ></Pressable>
       
          </View>
        <View style={styles.section}>
         
         
          <Text style={styles.texto}> Id: {this.state.dados.id}</Text>
          <Text style={styles.texto}> Nome: {this.state.dados.name} </Text>
          <Text style={styles.texto}> Repositorios: {this.state.dados.public_repos} </Text>
          <Text style={styles.texto}> Criado em: {this.state.dados.created_at}  </Text>
          <Text style={styles.texto}> Seguidores: {this.state.dados.followers}  </Text>
          <Text style={styles.texto}> Repositorios: {this.state.dados.following}  </Text>
          </View>
        </SafeAreaView>
      )
    }
  }

    

