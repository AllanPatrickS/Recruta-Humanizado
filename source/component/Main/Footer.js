import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class FirstScreen extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <TouchableHighlight
          underlayColor={'#ffffff'}
          onPress={() => console.log('click')}
        >
          <View style={styles.footerAlign}>
            <Icon
              name="explore"
              size={30}
              color="#204559"
            />
            <Text style={styles.text}>Oportunidades</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor={'#ffffff'}
          onPress={() => console.log('click')}
        >
          <View style={styles.footerAlign}>
          <Icon
              name="work"
              size={30}
              color="#204559"
            />
            <Text style={styles.text}>Inscrições</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor={'#ffffff'}
          onPress={() => console.log('click')}
        >
          <View style={styles.footerAlign}>
          <Icon
              name="perm-identity"
              size={30}
              color="#204559"
            />
            <Text style={styles.text}>Perfil</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: '10%',
    //backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerAlign: {
    width: 100,
    alignItems: 'center'
  },
  text: {
    color: '#204559',
    fontSize: 13,
    textAlign: 'center',
  }
})