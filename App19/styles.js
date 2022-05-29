import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
   },
  picker:{
    fontSize: 150,
    borderWidth:11,
    width: 150 ,
    borderWidth:1,
    borderColor: 'black',
    alignSelf:'auto',
    alignItems: 'baseline',
    marginTop: -25,
    marginLeft:80,
   

  },
texto:{
  color: '#000000',
  margin: 10,
  fontSize: 20,
   width: 60,
  alignSelf:'auto',
  padding: 10,
  marginBottom:-20
},
pickerItem: {
    height: 44,
}, 
title: {
  fontSize: 30,
  fontWeight: "bold",
  color: "#ff0000",
  alignSelf:"center",
  margin: 30,
},
safe:{
  flex: 0.5,
  alignContent:'center',
  alignSelf:'center',
  borderWidth:1,
  width: 340,
}
  
});

export {styles};