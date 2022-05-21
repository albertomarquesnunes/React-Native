import React,{useState} from 'react';
import { SafeAreaView, Text, TextInput, Pressable ,ScrollView, Switch } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
 
const Home = () => {
  
  const [Nome, setNome] = useState('');
  const [Idade, setIdade] = useState('');
  const [Limite, setLimite] = useState(10);
  const [Brasileiro, setBrasileiro] = useState(false);
  const [Sexo, setSexo] = useState();
  const [Escolaridade , SetEscolaridade] = useState();
 
  let listaSexo = {sexos: [{nome: 'Não Selecionado'},{nome: 'Masculino'},  {nome: 'Feminino'} ]};
  let listaEscolaridade = {nivel: [
    {nome: 'Não alfabetizado'},
    {nome: 'Fundamental incompleto'},
    {nome: 'Fundamental completo'},
    {nome: 'Médio incompleto'},
    {nome: 'Ensino médio completo'},
    {nome: 'Superior incompleto'},
    {nome: 'Superior completo'},
    {nome: 'Pós-graduação'},
    {nome: 'Mestrado'},
    {nome: 'Doutorado'}
      ]};
     
      
      let sexoItem = listaSexo.sexos.map( (valor, chave) => {
        return <Picker.Item key={chave} value={valor.nome} label={valor.nome} />
      });
      let escolaridadeItem = listaEscolaridade.nivel.map( (valor, chave) => {
        return <Picker.Item key={chave} value={valor.nome} label={valor.nome} />
      });

  const navigation = useNavigation();
 
    function irResultado(){
        navigation.navigate('Resultado',{ nome: Nome, idade: Idade ,limite: Limite, sexo:Sexo, escolaridade:Escolaridade, brasileiro: Brasileiro });
    }
   
    return(
    <SafeAreaView style={styles.container}>
     <ScrollView>
      <Text style={styles.titulo}> Abertura de Conta </Text>
      <Text style={styles.texto}>
        Nome:
      </Text>
        <TextInput 
          value={Nome}
          style={styles.input} 
          onChangeText={text => {setNome(text);}}
        />
        <Text style={styles.texto}>
          Idade:
        </Text>
        <TextInput
        value={Idade}
          style={styles.input} keyboardType="numeric"
          onChangeText={text => {setIdade(text);}}
          
        />
          <Text style={styles.texto}>
          Sexo:
        </Text>
        <Picker style={styles.combobox}         
        selectedValue={Sexo}
        onValueChange={ (v) => setSexo(v) }
      >
             {sexoItem}
 
      </Picker>
      
        <Text style={styles.texto}>
          Escolaridade:
        </Text>
        <Picker style={styles.combobox}         
        selectedValue={Escolaridade}
        onValueChange={ (e) => SetEscolaridade(e) }
      >
             {escolaridadeItem}
 
      </Picker>
        <Text style={styles.texto}>
          Limite:
        </Text>
        <Slider
      minimumValue={0}
      maximumValue={10000}
      step={1}
      onValueChange={ (valor) => setLimite(valor)}
      value={Limite}

    />
        <Text style={styles.texto}>
        R$ {Limite}
      </Text>
        <Text style={styles.texto}>
          Brasileiro:
        </Text>
        <Switch thumbColor='orange' trackColor={{false:'red',true:'green'}}
        value={Brasileiro}
        onValueChange={ valorSwitch => {setBrasileiro(valorSwitch)}}
        /> 
        
        <Pressable style={styles.botao} onPress={irResultado} >
              <Text style={styles.textoBotao}>Confirmar</Text>   
        </Pressable>
      </ScrollView>
     </SafeAreaView>
    )
  }


 export default Home; 
