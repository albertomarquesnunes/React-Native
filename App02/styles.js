import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
      },
      input:{
        height: 45,
        borderWidth: 1,
        borderColor: '#222',
        margin: 10,
        fontSize: 20,
        padding: 10,
      },
  
    texto:{
      color: '#ff0000',
      alignSelf: "center",
      textAlign: 'center',
      textAlignVertical:'center',
      height: 150,
      width: 150 ,
      margin: 30,
      fontSize: 100,
      borderColor: '#000',
      borderWidth: 1,
    },
    titulo:{
      color: '#ff8c1a',
      alignSelf: "center",
      textAlign: 'center',
      textAlignVertical:'center',
      height: 80,
      margin: 5,
      fontSize: 35,
     
    },

    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },

      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
      },

      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
      },
      
      highlight: {
        fontWeight: '700',
      },
      botao:{
        alignSelf: "center",
        borderRadius:30,
        width: 250,
        height: 50,
        margin: 10,
        backgroundColor: '#00ff00'
      },
      botaomenos:{
        alignSelf: "center",
        borderRadius:30,
        width: 250,
        height: 50,
        margin: 10,
        backgroundColor: '#ff2222'
      },
      textoBotao:{
        color: '#ffffff',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 45,
        fontSize: 36,
      }
    
  });

 
 
  export {styles};