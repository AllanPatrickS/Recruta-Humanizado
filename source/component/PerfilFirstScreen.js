import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

export default class PerfilFirstScreen extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.screen}>
          <View style={styles.space}>
            <Text style={styles.titleText}>Como você se chama?</Text>
            <TextInput
              style={styles.box}
              placeholder={'Digite o seu nome e sobrenome'}
              placeholderTextColor='#4460F1'
            />
          </View>

          <View style={styles.space}>
            <Text style={styles.titleText}>Data de nascimento</Text>
            <TextInput
              style={styles.box}
              placeholder={'Dia/Mês/Ano'}
              placeholderTextColor='#4460F1'
            />
          </View>

          <View style={styles.space}>
            <Text style={styles.titleText}>Gênero*</Text>
            <TextInput
              style={styles.box}
              placeholder={'Dia/Mês/Ano'}
              placeholderTextColor='#4460F1'
            />
          </View>

          <View style={styles.space}>
            <Text style={styles.titleText}>Eu me identifico como*</Text>
            <TextInput
              style={styles.box}
              placeholder={'Dia/Mês/Ano'}
              placeholderTextColor='#4460F1'
            />
          </View>

          <Text style={styles.bottomText}>*Utilizamos esses dados para entender melhor o nosso público e para melhorar a sua experiência. Nenhum dado é exposto sem sua autorização.</Text>

          <TouchableHighlight
            style={styles.nextButton}
            underlayColor={'#4460F1'}
            onPress={() => console.log('click')}
          >
            <Text style={styles.continueButtonText}>Continuar</Text>
          </TouchableHighlight>

          <View style={{alignSelf: 'center'}}>
            <Text>Carrossel</Text>
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
  space: {
    marginBottom: '5%'
  },
  titleText: {
    color: '#204559',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: '3%'
  },
  box: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 9,
    paddingLeft: '10%',
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
  bottomText: {
    color: '#204559',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: '10%'
  },
  nextButton: {
    backgroundColor: '#4460F1',
    borderRadius: 9,
    paddingVertical: '4%',
    marginBottom: '10%'
  },
  continueButtonText: {
    color: '#ffffff',
    alignSelf: 'center',
    fontSize: 17
  }
})