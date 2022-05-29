import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignSelf:'center'
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ff0000",
  },
  texto:{
    margin: 10,
    color: '#000000',
    textAlign:'center',
    margin: 10,
    fontSize: 20,
     
  },
  input: {
    width: 280,
    height: 45,
    textAlign: "center",
    borderRadius: 0,
    borderColor: "#000",
    borderWidth: 1,
    fontSize: 20,
    backgroundColor:"#fff"
  },
  btn: {
    width: 250,
    marginTop: 15,
    backgroundColor: "#0000ff",
    borderRadius: 10,
    marginLeft:20,
    alignItems:'center'
   },
  btnText: {
    width: 200,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#0000ff",
    borderRadius: 10,
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 25,
  },
  convertedValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#00ff00",
    textAlign:'center',
   marginTop: 10,
  },
});

export {styles};