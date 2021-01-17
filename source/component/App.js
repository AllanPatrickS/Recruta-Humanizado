import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './login/LoginScreen'
import LoadingScreen from './login/LoadingScreen'
import PerfilScreen from './perfil/PerfilScreen'
import MainScreen from './main/MainScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' headerMode='none'>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='LoadingScreen' component={LoadingScreen} />
        <Stack.Screen name='PerfilScreen' component={PerfilScreen} />
        <Stack.Screen name='MainScreen' component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;