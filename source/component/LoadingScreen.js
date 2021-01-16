import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.screen}>
          <View style={{ marginBottom: '32%' }}>
            <View style={styles.logo}></View>
            <Image></Image>
            <Text style={styles.titleText}>Recruta Humanizado</Text>
          </View>

          <View style={{marginBottom: '45%'}}>
            <View style={styles.logo}></View>
            <Text style={styles.commomText}>Carregando</Text>
          </View>

          <Text style={styles.bottomText}>Sabia que até hoje mais de 50 mil brasileiros conseguiram a sua primeira experiência profissional usando Recruta Humanizado?</Text>
        </View>
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
    alignItems: 'center',
    marginTop: '45%',
    marginHorizontal: '15%'
  },
  logo: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    marginBottom: '5%'
  },
  titleText: {
    color: '#204559',
    fontSize: 22,
    fontWeight: 'bold',
  },
  commomText: {
    color: '#204559',
    fontSize: 20,
  },
  bottomText: {
    color: '#204559',
    fontSize: 13,
    textAlign: 'center',
  }
})