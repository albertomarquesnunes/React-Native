import {StyleSheet} from 'react-native'
 
const styles = StyleSheet.create({
    container:{
      flex: 1
    },
    texto:{
        margin: 5,
        color: '#000',
       fontSize: 20,
      
      },
      titulo:{
        color: '#0000ff',
        alignSelf: "center",
        textAlign: 'center',
        textAlignVertical:'center',
        height: 80,
        margin: 5,
        fontSize: 30,
       
      },
      box:{
          backgroundColor: '#ececec',
          borderWidth: 1,
       
        margin: 10,
        flex:1,
        height: 330,
        width: 300,
      },
     
    })

export {styles};