import React from 'react';
import { View, Image, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function PerfilScreen({ navigation }) {

  return (
    <View style={styles.background}>
      <View style={styles.screen}>
        <Image style={styles.logo}></Image>
        <Text style={styles.titleText}>Recruta Humanizado</Text>
        <ActivityIndicator size={'large'} animating={true} color={'#4460F1'} />
        <Text style={styles.commomText}>Carregando</Text>
        <Text style={styles.bottomText}>Sabia que até hoje mais de 50 mil brasileiros conseguiram a sua primeira experiência profissional usando Recruta Humanizado?</Text>
      </View>
    </View>
  );
}