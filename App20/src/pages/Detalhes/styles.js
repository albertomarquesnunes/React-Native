import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 25,
        marginTop: 15,
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
        height: 350, 
        width: 330 ,
        justifyContent:'flex-start',
      },
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
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
    titulo:{
      color: '#ff0000',
      alignSelf: "center",
      textAlign: 'center',
      textAlignVertical:'center',
      height: 80,
      margin: 5,
      fontSize: 30,
      fontWeight:"bold"
     
    },
    titulo2:{
      color: '#0000ff',
      textAlign: 'center',
      textAlignVertical:'center',
      height: 80,
      margin: 5,
      fontSize: 25,
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
        color: '#ffffff',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 45,
        fontSize: 36,
      },
         
  });

 
 
  export {styles};