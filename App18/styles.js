import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  

    container: {
      flex:1,
      flexDirection: 'column',
      marginTop:10,
      marginBottom: 20,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto:{
     flex: 1,
      color: '#000000',
      fontSize: 20,
      marginTop:5,
      alignSelf:'flex-start'
       
    },
    section: {
     height: 250,
     width: 300,
     marginTop:40,
     marginBottom:1,
     borderWidth: 1,
     padding: 10,
    },
    sectionTitle: {
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    viewInput:{
      flex:0.2,
      flexDirection: 'row',
      borderColor:'#fff',
     borderTopColor:'#000000',
     borderWidth: 2,
     padding: 10,
    },
  
    viewFlat:{
      flex:1,
      flexDirection: 'row',
      alignItems:'center',
      height: 40,
      borderWidth: 1,
       
     // paddingVertical: 12,
      //paddingHorizontal: 10,
    //  borderBottomWidth: 1,
      borderColor: "#ddd",
    },
    viewInput1:{
      flex:0.4,
      flexDirection: 'row',
      
      borderColor:'#fff',
     borderTopColor:'#000000',
     borderWidth: 2,
     padding: 10,
    },
    titulo2:{
      
      borderColor:'#000',
      color: '#0000ff',
      textAlign: 'center',
      textAlignVertical:'center',
      height: 80,
      width: 300,

      margin: 5,
      fontSize: 30,
      fontWeight:"bold"
     
    },
    inputsmall: {
      width: 50,
      height: 33,
      borderColor: '#000',
      borderWidth: 1,
      padding: 10,
      marginRight:10
      
    } ,
    input:{
      width: 200,
      height: 33,
      borderColor: '#000',
      borderWidth: 1,
      padding: 10,
      marginRight:10
      
    },
    botao:{
      backgroundColor: '#11f',
      borderRadius:30,
      height: 35,
      width: 30,
      padding: 9,
      marginLeft: 5,
      
    },
    botaoquadrado:{
      flex: 1,
      flexDirection:'row',
      alignSelf: 'center',
      backgroundColor: '#800',
      height: 40,
      padding: 10,
      marginLeft: 4,
      borderColor:'#00ff00',
      borderWidth: 1,
    },
    botaotexto: {
      color: '#000',
      fontSize: 50,
      
    },
    nome:{
      marginTop: 15,
      fontSize: 30,
      textAlign: 'center',
      
    }
  });
  export {styles}; 