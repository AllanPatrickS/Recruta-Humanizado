import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class FirstScreen extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.footerAlign}>
          <View style={styles.logo}></View>
          <Text>Oportunidades</Text>
        </View>

        <View style={styles.footerAlign}>
          <View style={styles.logo}></View>
          <Text>Inscrições</Text>
        </View>

        <View style={styles.footerAlign}>
          <View style={styles.logo}></View>
          <Text>Perfil</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: '10%',
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerAlign: {
    width: '33%',
    alignItems: 'center'
  },
  logo: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
    marginBottom: '5%'
  },
})