import React, { Component } from 'react';
import { View, TouchableHighlight, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../assets/Logo1.png')}
        />
        <TouchableHighlight
          underlayColor={'#ffffff'}
          onPress={() => console.log('click')}
        >
          <Icon
            name="search"
            size={30}
            color="#4460F1"
          />
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logo: {
    height: 50,
    width: 50,
    marginBottom: '5%'
  },
})