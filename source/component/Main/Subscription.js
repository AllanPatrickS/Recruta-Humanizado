import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Oportunity extends Component {
  render() {
    return (
      <View>
        <Text style={styles.titleText}>Suas Inscrições</Text>

        <View style={styles.box}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '2%' }}>
            <Text style={styles.boldText}>Assistente de Cozinha</Text>
            <TouchableHighlight
              underlayColor={'#ffffff'}
              onPress={() => console.log('click')}
            >
              <Icon
                name="more-vert"
                size={30}
                color="#204559"
              />
            </TouchableHighlight>
          </View>

          <View style={{ flexDirection: 'row', marginBottom: '4%' }}>
            <Text style={[styles.normalText, { marginRight: '10%' }]}>R$ 600</Text>
            <Text style={styles.normalText}>Meio Período</Text>
          </View>

          <Text style={[styles.normalText, { marginBottom: '4%' }]}>Centro, Rio de Janeiro</Text>

          <Text style={[styles.normalText, { marginBottom: '10%' }]}>Restaurante do Barão</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text>Status</Text>
              <Text>Aguardando retorno</Text>
            </View>

            <TouchableHighlight
              style={styles.subscriptionButton}
              underlayColor={'#4460F1'}
              onPress={() => console.log('click')}
            >
              <Text style={styles.subscriptionButtonText}>Cancelar</Text>
            </TouchableHighlight>
          </View>
        </View>

        <Text style={styles.noSubscriptionButtonText}>Ainda não há nenhuma inscrição</Text>
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
  box: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: '5%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 7,
    marginBottom: '5%'
  },
  boldText: {
    color: '#204559',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    height: 25,
    width: 25,
    backgroundColor: 'blue',
  },
  normalText: {
    color: '#000000',
    fontSize: 15
  },
  subscriptionButton: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#4460F1',
    borderRadius: 9,
    paddingVertical: '2%',
    paddingHorizontal: '5%'
  },
  subscriptionButtonText: {
    color: '#4460F1',
    alignSelf: 'center',
    fontSize: 15
  },
  noSubscriptionButtonText: {
    color: '#204559',
    fontSize: 25,
    textAlign: 'center',
    marginTop: '15%'
  }
})