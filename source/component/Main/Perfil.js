import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';


export default class Oportunity extends Component {
  render() {
    return (
      <View>
        <Text style={styles.titleText}>Seu Perfil</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    color: '#204559',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: '8%'
  },
})