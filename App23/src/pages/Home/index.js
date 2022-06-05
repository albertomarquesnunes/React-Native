import React,{ useEffect, useState} from 'react';
import { View, SafeAreaView, Text, TextInput, Pressable ,ScrollView,  StatusBar,  TouchableOpacity, Modal, Image } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from "react-native-image-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { openDatabase } from "react-native-sqlite-storage";
import { styles } from './styles';

import Camera from '../Camera';

const db = openDatabase({
  name: "rn_sqlite",
});
 
const Home = () => {
  const [open, setOpen] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [Nome, setNome] = useState('');
  const [Campo, setCampo] = useState();
  const [img, setImg] = useState('https://vejasp.abril.com.br/wp-content/uploads/2016/12/ads_macgyver1.jpg');

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20),foto VARCHAR(254), area VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };

  const incluirTarefa = () => {
    if (!Nome) {
      alert("Informe os Dados");
      return false;
    }
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome,foto,area) VALUES (?,?,?)`,
        [Nome,img,Campo],
        (sqlTxn, res) => {
          console.log(`${img} Dados adicionados com sucesso!`);
          setNome('');
          setImg('https://vejasp.abril.com.br/wp-content/uploads/2016/12/ads_macgyver1.jpg');
          setCampo('');
          AsyncStorage.removeItem('foto');
        },
        error => {
          console.log("Erro ao inserir os dados " + error.message);
        },
      );
    });
  };
  let listaCampo = {campos: [{nome: 'Atendimento Interno'},{nome: 'Atendimento Externo'},  {nome: 'Laboratório'} ]};

      let campoItem = listaCampo.campos.map( (valor, chave) => {
        return <Picker.Item key={chave} value={valor.nome} label={valor.nome} />
      });
     
  const navigation = useNavigation();
 
   
    function tirarfoto(){
      navigation.navigate('Camera');
  }
  useEffect(async () => {
    await createTables();
    await carrega();
    const unsubscribe = navigation.addListener('focus', async() => {
        await carrega();
      
    });
    return () => {
      unsubscribe;
     
    };
  }, [navigation]);

const carrega = async () => { AsyncStorage.getItem('foto').then((value)=> {
  if(value!==null){
    setImg(value);
  }
    console.log(value);
    }
);
}

function openAlbum(){
  const options = {
    title: 'Selecione uma foto',
    chooseFromLibraryButtonTitle: 'Buscar foto do album..',
    noData: true,
    mediaType: 'photo'
  };

  ImagePicker.launchImageLibrary(options, (response) => {

    if(response.didCancel){
      console.log('Image Picker cancelado...');
    }else if(response.error){
      console.log('Gerou algum erro: ' + response.error);
    }else{
      setCapturedPhoto(response.assets[0].uri);
      setOpen(true);
      console.log('FOTO DA GALERIA: ' + response.assets[0].uri);
      setImg(response.assets[0].uri);
    }

  })


}
   

    return(
    <View style={styles.container}>
     <ScrollView>
      <Text style={styles.titulo}> Criação de Crachás </Text>
      <Image
        source={{ uri: img }}
        style={styles.imagem}
      />
      <View style={styles.boxbotao}>
        <Pressable style={styles.botao} onPress={tirarfoto} >
              <Text style={styles.textoBotao}>Camera</Text>   
        </Pressable>
        <Pressable style={styles.botao} onPress={openAlbum} >
              <Text style={styles.textoBotao}>Galeria</Text>   
        </Pressable>
        </View>
      <Text style={styles.texto}>
        Nome:
      </Text>
        <TextInput 
          value={Nome}
          style={styles.input} 
          onChangeText={text => {setNome(text);}}
        />
     
          <Text style={styles.texto}>
          Area:
        </Text>
        <Picker style={styles.combobox}         
        selectedValue={Campo}
        onValueChange={ (v) => setCampo(v) }
      >
             {campoItem}
 
      </Picker>
       
        <Pressable style={styles.botao} onPress={incluirTarefa} >
              <Text style={styles.textoBotao}>Confirmar</Text>   
        </Pressable>
      </ScrollView>
     </View>
    )
  }


 export default Home; 
