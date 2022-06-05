import {StyleSheet} from 'react-native';

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      justifyContent: 'center'
    },
    preview:{
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      margin: 20
    },
    capture:{
      flex: 1,
      backgroundColor: '#0000ff',
      borderRadius: 5,
      padding: 15,
    
      
      margin: 20,
    },
    camPosition:{
      backgroundColor: '#FFF',
      borderRadius:5,
      borderColor: "#ff0000",
      padding: 10,
      height: 40,
      marginTop:50,
      marginBottom:50
    },
    card:{
      shadowColor: '#000',
      backgroundColor: '#FFF',
      shadowOffset: {width:0, height: 1},
      shadowOpacity: 0.8,
      margin: 15,
      shadowRadius: 5,
      borderRadius: 5,
      elevation: 3,
    },
    titulo:{
      fontSize: 18,
      padding: 15,
      color: '#00ff00',
      fontWeight:"bold"
    },
    descricao:{
      fontSize: 10,
      padding: 15,
    },
    sobre:{
      fontSize: 18,
      padding: 15,
      fontWeight:"bold",
      color: '#0000ff',
    },
    
  titulo2:{
    color: '#0000ff',
    textAlign: 'left',
    textAlignVertical:'center',
    height: 80,
    margin: 5,
    fontSize: 30,
    fontWeight:"bold"
   
  },

  botao:{
      alignSelf: "center",
      width: 250,
      height: 50,
      margin: 10,
      backgroundColor: '#0000cc'
    },
   
    textoBotao:{
      color: '#ff0000',
      textAlign: 'center',
      textAlignVertical: 'center',
      height: 45,
      fontSize: 36,
    },
    sectionContainer: {
      marginTop: 50,
      paddingHorizontal: 24,
      marginLeft:50,
      marginBottom:50,
      height: 250, 
      width: 250 ,
    }, 

    input:{
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      fontSize: 20,
      
    },
  picker:{
      fontSize: 150,
      borderWidth:1,
      height: 50, 
      width: 150 ,
      width: 200,
      borderColor: 'black',
      width: "100%",
      
  },
  pickerItem: {
      height: 44,
  },

  texto:{
    margin: 10,
    color: '#000000',
    margin: 10,
    fontSize: 20,
     
  },

  });
  export {styles}; 