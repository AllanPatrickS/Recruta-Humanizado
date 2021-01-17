import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import Header from './Header'
import Footer from './Footer'
import Oportunity from './Oportunity'
import Subscription from './Subscription'
import Perfil from './Perfil'

export default class FirstScreen extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.screen}>
          <Header />

          <Perfil />
        </View>

        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  screen: {
    flexDirection: 'column',
    margin: '10%',
  },
})