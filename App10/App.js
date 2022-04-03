import React, { Component } from 'react';
import {SafeAreaView, ActivityIndicator, FlatList, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataEuro: [],
      dataDolar:[],
      isLoading: true
    };
  }
  

  render() {
    const { dataEuro,dataDolar, isLoading } = this.state;
console.log(dataDolar);
console.log(dataEuro);
    return (
      
      <SafeAreaView style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : <Text></Text>}
      </SafeAreaView>
      
      
    );
    
  }
  componentDidMount() {
    this.getValores();
  }
  async getValores() {
    try {
      const responseEuro = await fetch('https://economia.awesomeapi.com.br/EUR-BRL/1?format=json');
      const responseDolar = await fetch('https://economia.awesomeapi.com.br/USD-BRL/1?format=json');
      const jsonEuro = await responseEuro.json();
      const jsonDolar = await responseDolar.json();
      this.setState({ dataEuro: jsonEuro ,dataDolar: jsonDolar});
      
      
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }
  

};