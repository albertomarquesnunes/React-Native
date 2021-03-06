import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 25,
        marginTop: 15,
      },
      img: {
        marginTop: 50,
        borderRadius:50,
        borderWidth:1,
        width: 65,
        height: 65,
        borderColor:"#0000ff"
      },
      view:{
        width: '100%', 
        height: 77,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
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
    titulo:{
      color: '#0000ff',
      alignSelf: "center",
      textAlign: 'center',
      textAlignVertical:'center',
      height: 80,
      marginTop: 2,
      marginBottom:25,
      fontSize: 17,
      fontWeight:"bold"
     
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
        color: '#ffffff',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 45,
        fontSize: 36,
      },
         
  });

 
 
  export {styles};