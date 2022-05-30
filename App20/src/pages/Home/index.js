import React, {useState, useEffect }  from 'react';
import {SafeAreaView,View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Tabelas from '../Tabelas';
import api from '../../Servicos/api';
import {styles} from './styles';


const Home = () => {
 
  const [tarefas, setTarefas] = useState();
  const [loading, setLoading] = useState(true);
     
  const navigation = useNavigation();

  useEffect(()=>{
    const fetchProducts = async ()=>{
    const response = await api.get();
    setLoading(false);
    setTarefas(response.data);
   }
  fetchProducts()
  
  },[])

    if(loading)
      {
        return(
          <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
            <ActivityIndicator color="#09A6FF" size={40}/>
          </View>
        )
      }
      else
      {

        return(
          <SafeAreaView>
            <Text style={styles.titulo}>App de Filmes</Text>
            <FlatList
                data={tarefas}
                keyExtractor={item => item.id.toString() }
                renderItem={ ({item}) => <Tabelas route={item} /> }
                
                />

            
          </SafeAreaView>
        )
       }
      }



export default Home;