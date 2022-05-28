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
  const [tarefas, setTarefas] = useState([]);
 
  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
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
    if (!tarefa) {
      alert("Informe uma tarefa");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa("");
        },
        error => {
          console.log("Erro ao inserir uma Tarefa " + error.message);
        },
      );
    });
  };

  const excluirTarefa = (idtarefa) => {
   
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM tarefas WHERE id=?`,
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
        `SELECT * FROM tarefas ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
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
        <Text style={{ marginRight: 9 }}>{item.id}</Text>
        <Text style={{marginRight: 9}}>{item.nome}</Text>
        
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
   <Text style={styles.titulo2}>Tarefas</Text>
 </View>
 <View style={styles.viewInput}>
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