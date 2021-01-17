import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen'
import LoadingScreen from './LoadingScreen'
import PerfilFirstScreen from './Perfil/PerfilFirstScreen'
import PerfilSecondScreen from './Perfil/PerfilSecondScreen'
import PerfilThirdScreen from './Perfil/PerfilThirdScreen'
import PerfilFourthScreen from './Perfil/PerfilFourthScreen'
import PerfilFifthScreen from './Perfil/PerfilFifthScreen'
import PerfilConclusionScreen from './Perfil/PerfilConclusionScreen'
import MainScreen from './Main/MainScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' headerMode='none'>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='LoadingScreen' component={LoadingScreen} />
        <Stack.Screen name='PerfilFirstScreen' component={PerfilFirstScreen} />
        <Stack.Screen name='PerfilSecondScreen' component={PerfilSecondScreen} />
        <Stack.Screen name='PerfilThirdScreen' component={PerfilThirdScreen} />
        <Stack.Screen name='PerfilFourthScreen' component={PerfilFourthScreen} />
        <Stack.Screen name='PerfilFifthScreen' component={PerfilFifthScreen} />
        <Stack.Screen name='PerfilConclusionScreen' component={PerfilConclusionScreen} />
        <Stack.Screen name='MainScreen' component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;