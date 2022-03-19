import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
     
    texto:{
      color: '#ff0000',
      alignSelf: "center",
      textAlign: 'center',
      textAlignVertical:'center',
      height: 80,
      fontSize: 30,
    
    },
    textoresultado:{
      color: '#ff0000',
      textAlign: 'center',
      textAlignVertical:'center',
      height: 150,
      fontSize: 30,
    
    },
    titulo:{
      color: '#000000',
      alignSelf: "center",
      textAlign: 'center',
      textAlignVertical:'center',
      height: 80,
      margin: 5,
      fontSize: 30,
     
    },

     
      highlight: {
        fontWeight: '700',
      },
      botao:{
        alignSelf: "center",
        borderRadius:20,
        width: 250,
        height: 50,
        margin: 10,
        backgroundColor: '#00ff00'
      },
   
      textoBotao:{
        color: '#ffffff',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 45,
        fontSize: 30,
      },
      estiloimagem:{
        width: 150, 
        height: 150, 
        alignSelf:'center', 
        marginTop:10, 
        marginBottom:10
      }
    
  });

 
 
  export {styles};