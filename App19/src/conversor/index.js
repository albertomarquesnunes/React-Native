import React from "react";
import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";

import api from "../servicos/api";
import { styles } from "./styles";

export default class Conversor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinA: props.coinA,
      coinB: props.coinB,
      coinA_value: 0,
      convertedValue: 0,
    };

    this.converter = this.converter.bind(this);
  }


  async converter(moedaA,moedaB) {
    let from_to = moedaA+ "_" + moedaB;
    const response = await api.get(
     `convert?q=${from_to}&compact=ultra&apiKey=d8148018a3851e72d0e5`
    );

    let price = response.data[from_to];

    let result = price * parseFloat(this.state.coinA_value);

    this.setState({ convertedValue: result.toFixed(2) });
    Keyboard.dismiss();
  }

  render() {
    let { coinA, coinB } = this.props;

    return (
      <SafeAreaView style={styles.container}>
       
        <TextInput
          placeholder="Valor a ser convertido"
          placeholderTextColor="#000"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(coinA_value) => this.setState({ coinA_value })}
        />

        <TouchableOpacity style={styles.btn} onPress={()=>this.converter(coinA,coinB)}>
          <Text style={styles.btnText}>Converter</Text>
        </TouchableOpacity>
        <Text style={styles.convertedValue}>Resultado:</Text>
        <Text style={styles.convertedValue}>
          {this.state.convertedValue === 0 ? "________" : this.state.convertedValue}
        </Text>
      </SafeAreaView>
    );
  }
}

