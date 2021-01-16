import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

export default class PerfilSecondScreen extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.screen}>
          <View style={styles.space}>
            <Text style={styles.titleText}>No momento estou</Text>
            <TextInput
              style={styles.box}
              placeholder={'Digite o seu nome e sobrenome'}
              placeholderTextColor='#4460F1'
            />
          </View>

          <View style={styles.space}>
            <Text style={styles.titleText}>Qual ano ou período?</Text>
            <TextInput
              style={styles.box}
              placeholder={'Dia/Mês/Ano'}
              placeholderTextColor='#4460F1'
            />
          </View>

          <View style={styles.space}>
            <Text style={styles.titleText}>Nome da instituição de ensino</Text>
            <TextInput
              style={styles.box}
              placeholder={'Digite o nome da instituição'}
              placeholderTextColor='#4460F1'
            />
          </View>

          <View style={styles.space}>
            <View style={styles.careerTitleText}>
              <Text style={styles.titleText}>Estou a procura de</Text>
              <Text style={styles.smallText}>Selecione um ou mais</Text>
            </View>

            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableHighlight
                  style={[styles.box, styles.careerButton]}
                  underlayColor={'#4460F1'}
                  onPress={() => console.log('click')}
                >
                  <Text style={styles.careerButtonText}>Jovem Aprendiz</Text>
                </TouchableHighlight>

                <TouchableHighlight
                  style={[styles.box, styles.careerButton]}
                  underlayColor={'#4460F1'}
                  onPress={() => console.log('click')}
                >
                  <Text style={styles.careerButtonText}>Meio Período</Text>
                </TouchableHighlight>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableHighlight
                  style={[styles.box, styles.careerButton]}
                  underlayColor={'#4460F1'}
                  onPress={() => console.log('click')}
                >
                  <Text style={styles.careerButtonText}>Estágio</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={[styles.box, styles.careerButton]}
                  underlayColor={'#4460F1'}
                  onPress={() => console.log('click')}
                >
                  <Text style={styles.careerButtonText}>Trainee</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableHighlight
              style={styles.backButton}
              underlayColor={'#4460F1'}
              onPress={() => console.log('click')}
            >
              <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.nextButton}
              underlayColor={'#4460F1'}
              onPress={() => console.log('click')}
            >
              <Text style={styles.continueButtonText}>Continuar</Text>
            </TouchableHighlight>
          </View>

          <View style={{ alignSelf: 'center' }}>
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: '5%'
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
  careerTitleText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  smallText: {
    color: '#204559',
    fontSize: 11,
    textAlign: 'center',
    alignSelf: 'center'
  },
  careerButton: {
    backgroundColor: '#ffffff',
    width: '48%',
    paddingLeft: '0%',
    paddingVertical: '5%',
    marginBottom: '5%'
  },
  careerButtonText: {
    color: '#000000', 
    alignSelf: 'center', 
    fontSize: 17
  },
  nextButton: {
    backgroundColor: '#4460F1',
    width: '48%',
    borderRadius: 9,
    paddingVertical: '4%',
    marginBottom: '10%'
  },
  backButton: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#4460F1',
    width: '48%',
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