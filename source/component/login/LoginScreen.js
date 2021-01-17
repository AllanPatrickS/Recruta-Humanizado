import React from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

export default function FirstScreen({ navigation }) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const signup = () => {
    if (emailHasErrors && passwordHasErrors)
      navigation.navigate('LoadingScreen');
  }

  const emailHasErrors = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email) == false;
  }

  const passwordHasErrors = () => {
    return password.length < 8;
  }


  return (
    <View style={styles.background}>
      <View style={styles.screen}>
        <Image 
          style={styles.logo}
          source={require('../../assets/Logo1.png')}
        />
        <Text style={styles.titleText}>Opa, tudo bem?</Text>
        <Text style={[styles.commomText, { marginBottom: '8%' }]}>Parece que essa é a primeira vez por aqui no Recruta humanizado.</Text>
        <Text style={[styles.commomText, { marginBottom: '6%' }]}>Vamos começar?</Text>

        <TextInput
          style={styles.box}
          placeholder={'Digite o seu e-mail'}
          placeholderTextColor='#4460F1'
          onChangeText={text => setEmail(text)}
          vaule={email}
        />
        <HelperText type="error" visible={emailHasErrors() && email.length !== 0}>
          Email inválido!
        </HelperText>

        <TextInput
          style={styles.box}
          placeholder={'Digite sua senha'}
          placeholderTextColor='#4460F1'
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <HelperText type="error" visible={passwordHasErrors() && password.length !== 0}>
          A senha precisa ter pelo menos 8 dígitos!
        </HelperText>

        <TouchableHighlight
          style={styles.signUpBox}
          underlayColor={'#4460F1'}
          onPress={signup}
        >
          <Text style={styles.registerButtonText}>Cadastrar</Text>
        </TouchableHighlight>

        <Text style={styles.commomText}>ou você também pode</Text>

        <View style={styles.options}>
          <TouchableHighlight
            style={styles.optionsBox}
            underlayColor={'#4460F1'}
            onPress={() => navigation.navigate('LoadingScreen')}
          >
            <Image
              style={styles.social}
              source={require('../../assets/google.png')} />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.optionsBox}
            underlayColor={'#4460F1'}
            onPress={() => navigation.navigate('LoadingScreen')}
          >
            <Image
              style={styles.social}
              source={require('../../assets/facebook.png')} />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.optionsBox}
            underlayColor={'#4460F1'}
            onPress={() => navigation.navigate('LoadingScreen')}
          >
            <Image
              style={styles.social}
              source={require('../../assets/apple.png')} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white'
  },
  screen: {
    flexDirection: 'column',
    marginTop: '10%',
    marginHorizontal: '11%'
  },
  logo: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    marginBottom: '5%'
  },
  titleText: {
    color: '#204559',
    fontSize: 25,
    marginBottom: '2%'
  },
  commomText: {
    color: '#204559',
    fontSize: 20,
    marginBottom: '3%'
  },
  box: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 9,
    paddingLeft: '5%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2,
    elevation: 3,
  },
  signUpBox: {
    backgroundColor: '#4460F1',
    borderRadius: 9,
    paddingVertical: '4%',
    marginTop: '7%',
    marginBottom: '5%'
  },
  registerButtonText: {
    color: '#ffffff',
    alignSelf: 'center',
    fontSize: 17
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  optionsBox: {
    backgroundColor: '#ffffff',
    borderRadius: 9,
    paddingVertical: '4%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2,
    elevation: 3,
    width: 80
  },
  social: {
    alignSelf: 'center',
    height: 50,
    width: 50,
  },
})