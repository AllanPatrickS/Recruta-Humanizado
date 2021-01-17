import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Oportunity extends Component {
  render() {
    return (
      <View>
        <View style={{ marginBottom: '10%' }}>
          <View style={styles.flexRow}>
            <Text style={styles.titleText}>Seu Perfil</Text>
            <TouchableHighlight
              underlayColor={'#ffffff'}
              onPress={() => console.log('click')}
            >
              <Icon
                name="edit"
                size={25}
                color="#204559"
                style={styles.iconSpacement}
              />
            </TouchableHighlight>
          </View>

          <Text style={styles.commomText}>Nome nome</Text>
          <Text style={styles.commomText}>25 anos</Text>
          <Text style={styles.commomText}>Cisgênero Feminino</Text>
          <Text style={styles.commomText}>Preto</Text>
        </View>

        <View style={{ marginBottom: '10%' }}>
          <View style={styles.flexRow}>
            <Text style={styles.titleText}>Educação</Text>
            <TouchableHighlight
              underlayColor={'#ffffff'}
              onPress={() => console.log('click')}
            >
              <Icon
                name="edit"
                size={25}
                color="#204559"
                style={styles.iconSpacement}
              />
            </TouchableHighlight>
          </View>

          <Text style={styles.commomText}>Cursando ensino médio</Text>
          <Text style={styles.commomText}>3º ano</Text>
        </View>

        <View style={{ marginBottom: '10%' }}>
          <View style={styles.flexRow}>
            <Text style={styles.titleText}>Editar preferências</Text>
            <TouchableHighlight
              underlayColor={'#ffffff'}
              onPress={() => console.log('click')}
            >
              <Icon
                name="edit"
                size={25}
                color="#204559"
                style={styles.iconSpacement}
              />
            </TouchableHighlight>
          </View>

          <Text style={[styles.smallText, {marginBottom: '3%'}]}>Estou a procura de</Text>

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

        <View style={{ marginBottom: '10%' }}>
          <View style={styles.flexRow}>
            <Text style={styles.titleText}>Eu gosto de</Text>
            <TouchableHighlight
              underlayColor={'#ffffff'}
              onPress={() => console.log('click')}
            >
              <Icon
                name="edit"
                size={25}
                color="#204559"
                style={styles.iconSpacement}
              />
            </TouchableHighlight>
          </View>

          <Text style={styles.commomText}>xxxx</Text>
          <Text style={styles.commomText}>xxxx</Text>
          <Text style={styles.commomText}>xxxx</Text>
        </View>

        <View style={{ marginBottom: '10%' }}>
          <View style={styles.flexRow}>
            <Text style={styles.titleText}>Minha personalidade</Text>
            <TouchableHighlight
              underlayColor={'#ffffff'}
              onPress={() => console.log('click')}
            >
              <Icon
                name="edit"
                size={25}
                color="#204559"
                style={styles.iconSpacement}
              />
            </TouchableHighlight>
          </View>

          <Text style={styles.commomText}>xxxx</Text>
          <Text style={styles.commomText}>xxxx</Text>
          <Text style={styles.commomText}>xxxx</Text>
        </View>

        <View style={{ marginBottom: '10%' }}>
          <View style={styles.flexRow}>
            <Text style={styles.titleText}>Quais são as suas habilidades</Text>
            <TouchableHighlight
              underlayColor={'#ffffff'}
              onPress={() => console.log('click')}
            >
              <Icon
                name="edit"
                size={25}
                color="#204559"
                style={styles.iconSpacement}
              />
            </TouchableHighlight>
          </View>

          <Text style={styles.commomText}>xxxx</Text>
          <Text style={styles.commomText}>xxxx</Text>
          <Text style={styles.commomText}>xxxx</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row'
  },
  titleText: {
    color: '#204559',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: '4%'
  },
  iconSpacement: {
    marginLeft: '25%'
  },
  commomText: {
    color: '#204559',
    fontSize: 18,
  },
  smallText: {
    color: '#204559',
    fontSize: 15,
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
  careerButton: {
    backgroundColor: '#ffffff',
    width: '48%',
    paddingLeft: '0%',
    paddingVertical: '5%',
    marginBottom: '5%'
  },
  careerButtonText: {
    color: '#204559', 
    alignSelf: 'center', 
    fontSize: 17
  },
})