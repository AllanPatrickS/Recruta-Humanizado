import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default function FifthScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.screen}>
        <View style={styles.space}>
          <Text style={styles.titleText}>Quais são as suas habilidades</Text>
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
                <Text style={styles.careerButtonText}>Costura</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Programação</Text>
              </TouchableHighlight>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Escrita</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Venda</Text>
              </TouchableHighlight>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Construção</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Conserto</Text>
              </TouchableHighlight>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Dança</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Luta</Text>
              </TouchableHighlight>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Desenho</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Ensino</Text>
              </TouchableHighlight>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Fotografia</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Plantio</Text>
              </TouchableHighlight>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                underlayColor={'#4460F1'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Raciocínio lógico</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.box, styles.careerButton]}
                //underlayColor={'#4460F100'}
                onPress={() => console.log('click')}
              >
                <Text style={styles.careerButtonText}>Limpeza</Text>
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
    fontSize: 22,
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