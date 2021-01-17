import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default function PerfilFourthScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.screen}>
        <View style={styles.space}>
          <Text style={styles.titleText}>Minha personalidade</Text>
          <Text style={styles.smallText}>Selecione uma ou mais opções que você mais se identifica.</Text>
          <Text style={styles.smallText}>Não se preocupe, você pode alterar essas escolhas depois.</Text>
        </View>

        <View style={styles.space}>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Responsável</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Tímido</Text>
              </TouchableHighlight>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Ativo</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Conversativo</Text>
              </TouchableHighlight>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Extrovertido</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Organizado</Text>
              </TouchableHighlight>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Observador</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Introvertido</Text>
              </TouchableHighlight>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Pensante</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Explorador</Text>
              </TouchableHighlight>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Dedicado</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Cauteloso</Text>
              </TouchableHighlight>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Ambicioso</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                //underlayColor={'#4460F100'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Otimista</Text>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  screen: {
    flexDirection: 'column',
    marginTop: '10%',
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
  smallText: {
    color: '#204559',
    fontSize: 11,
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