import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.screen}>
          <View style={{ marginBottom: '15%' }}>
            <Image
              style={styles.logo}
              source={require('../../../assets/Logo1.png')}
            />
            <Text style={styles.titleText}>Você já pode explorar a nossa lista de oportunidades</Text>
          </View>

          <View style={{ marginBottom: '20%' }}>
            <Text style={styles.bottomText}>Todas as oportunidades foram selecionadas baseadas no seu perfil. Lembre-se que você sempre pode editar as suas preferências em Meu Perfil.</Text>
          </View>

          <TouchableHighlight
            style={styles.nextButton}
            underlayColor={'#4460F1'}
            onPress={() => console.log('click')}
          >
            <Text style={styles.continueButtonText}>Continuar</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.backButton}
            underlayColor={'#4460F1'}
            onPress={() => console.log('click')}
          >
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableHighlight>


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
    marginBottom: '5%'
  },
  titleText: {
    color: '#204559',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bottomText: {
    color: '#204559',
    fontSize: 12,
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#4460F1',
    width: '100%',
    borderRadius: 9,
    paddingVertical: '4%',
    marginBottom: '10%'
  },
  backButton: {
    backgroundColor: '#ffffff',
    width: '50%',
    borderWidth: 2,
    borderColor: '#4460F1',
    borderRadius: 9,
    paddingVertical: '4%',
    marginBottom: '10%'
  },
  continueButtonText: {
    color: '#ffffff',
    alignSelf: 'center',
    fontSize: 17
  },
  backButtonText: {
    color: '#4460F1',
    alignSelf: 'center',
    fontSize: 17
  }
})