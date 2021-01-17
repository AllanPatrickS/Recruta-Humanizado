import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function LoginScreen({ navigation }) {

  useEffect(() => {
    setTimeout(function () {
      navigation.navigate('PerfilScreen');
    }.bind(this), 3000);
  });

  return (
    <View style={styles.background}>
      <View style={styles.screen}>
        <Image
          style={styles.logo}
          source={require('../../assets/Logo1.png')}
        />
        <Text style={styles.titleText}>Recruta Humanizado</Text>
        <ActivityIndicator size={'large'} animating={true} color={'#4460F1'} />
        <Text style={styles.commomText}>Carregando</Text>
        <Text style={styles.bottomText}>Sabia que até hoje mais de 50 mil brasileiros conseguiram a sua primeira experiência profissional usando Recruta Humanizado?</Text>
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
    alignItems: 'center',
    marginTop: '30%',
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
    fontWeight: 'bold',
    marginBottom: '32%'
  },
  commomText: {
    color: '#204559',
    fontSize: 20,
    marginBottom: '45%'
  },
  bottomText: {
    color: '#204559',
    fontSize: 13,
    textAlign: 'center',
  }
})