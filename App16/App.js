import React, { useEffect, useState } from "react";
import {SafeAreaView, View, Text, StatusBar, TextInput, Pressable,Button, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// Para React Native CLI
import { openDatabase } from "react-native-sqlite-storage";
//import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { styles } from './styles';

 
// Para React Native CLI
const db = openDatabase({
  name: "rn_sqlite",
});
 

 
const App = () => {
  const [tarefa, setTarefa] = useState();
  const [quantidade, setQuantidade] = useState();
  const [tarefas, setTarefas] = useState([]);
 
  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS compras (id INTEGER PRIMARY KEY AUTOINCREMENT, quantidade INTEGER, produto VARCHAR(20))`,
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
    if (!tarefa || !quantidade) {
      alert("Informe a quantidade e o Produto");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO compras (quantidade,produto) VALUES (?,?)`,
        [quantidade,tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} produto adicionado com sucesso!`);
          getTarefas();
          setTarefa("");
          setQuantidade("");
        },
        error => {
          console.log("Erro ao inserir o produto " + error.message);
        },
      );
    });
  };

  const excluirTarefa = (idtarefa) => {
   
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM compras WHERE id=?`,
        [idtarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa("");
        },
        error => {
          console.log("Erro ao Excluir uma Tarefa "+idtarefa+":  " + error.message);
        },
      );
    });
  };
 
  const getTarefas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM compras ORDER BY produto ASC`,
        [],
        (sqlTxn, res) => {
          console.log("Compras lidas com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id,quantidade: item.quantidade, produto: item.produto });
            }
 
            setTarefas(results);
          }
        },
        error => {
          console.log("Erro ao obter Tarefas " + error.message);
        },
      );
    });
  };
 
  const renderTarefa = ({ item }) => {
    return (
        <View style={styles.viewFlat}>
          
        
        <Text style={{marginRight: 9, marginLeft:9}}>{item.produto}</Text>
        <Text style={{ marginRight: 9 }}>({item.quantidade})</Text>
        
        <Button title="Del" onPress={()=>{excluirTarefa(item.id)}} />
         
           
    

      </View>
    );
  };
 
  useEffect(async () => {
    await createTables();
    await getTarefas();
  }, []);
 
  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#222" />
 <View >
   <Text style={styles.titulo2}>Compras</Text>
 </View>
 <View style={styles.viewInput}>
 <TextInput style={styles.inputsmall} 
        value={quantidade}
        onChangeText={setQuantidade}
        
      />
      <TextInput style={styles.input} 
        value={tarefa}
        onChangeText={setTarefa}
        
      />
      <Pressable  style={styles.botao} onPress={incluirTarefa} >
     <Text style={{color:'#fff', fontWeight:"bold",alignSelf:'auto'}}>+</Text> 
    </Pressable>
 </View>
      
 <View style={{
        borderColor:'#000',
        borderWidth: 2,
        marginTop: 15,
        textAlign: 'center',
        width: 300, 
        height: 250
         }}>
           
      <FlatList 
        data={tarefas}
        renderItem={renderTarefa}
        key={t => t.id}
        
      />
    
      </View>
    </SafeAreaView>
    
  );
};
 
export default App;