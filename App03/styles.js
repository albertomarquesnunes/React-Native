import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
      },
      input:{
        alignSelf: "center",
        height: 45,
        width: 300,
        borderWidth: 1,
        borderColor: '#222',
        margin: 10,
        fontSize: 20,
        padding: 10,
      },
  
    texto:{
      color: '#00ff00',
      alignSelf: "center",
      textAlign: 'center',
      textAlignVertical:'center',
      height: 150,
      margin: 10,
     fontSize: 30,
    
    },
    titulo:{
      color: '#ff8c1a',
      alignSelf: "center",
      textAlign: 'center',
      textAlignVertical:'center',
      height: 80,
      margin: 5,
      fontSize: 30,
     
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
        backgroundColor: '#0000ff'
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