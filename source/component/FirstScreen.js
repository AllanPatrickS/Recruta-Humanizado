import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';

export default class FirstScreen extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.screen}>
          <View style={styles.firstBox}>
            <View style={styles.logo}></View>
            <Image></Image>
            <View>
              <Text style={styles.titleText}>Opa, tudo bem?</Text>
              <Text style={styles.commomText}>Parece que essa é a primeira vez por aqui no Recruta humanizado.</Text>
            </View>
          </View>

          <View style={{ marginBottom: '10%' }}>
            <Text style={[styles.commomText, { marginBottom: '6%' }]}>Vamos começar?</Text>
            <TextInput
              style={styles.box}
              placeholder={'Digite o seu e-mail'}
              placeholderTextColor='#4460F1'
            />
            <TextInput
              style={styles.box}
              placeholder={'Digite sua senha'}
              placeholderTextColor='#4460F1'
            />
            <TouchableHighlight
              style={styles.signUpBox}
              underlayColor={'#4460F1'}
              onPress={() => console.log('click')}
            >
              <Text style={styles.registerButtonText}>Cadastrar</Text>
            </TouchableHighlight>
          </View>

          <View>
            <Text style={styles.commomText}>ou você também pode</Text>
            <Text style={styles.commomText}>ícones de rede sociais</Text>
          </View>
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
    marginTop: '20%',
    marginHorizontal: '11%'
  },
  firstBox: {
    marginBottom: '14%'
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
    fontSize: 25,
    marginBottom: '2%'
  },
  commomText: {
    color: '#204559',
    fontSize: 20,
    marginBottom: '3%'
  },
  box: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 9,
    paddingLeft: '5%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: '5%'
  },
  signUpBox: {
    backgroundColor: '#4460F1',
    borderRadius: 9,
    paddingVertical: '4%',
    marginTop: '7%',
    marginBottom: '0%'
  },
  registerButtonText: {
    color: '#ffffff',
    alignSelf: 'center',
    fontSize: 17
  }
})