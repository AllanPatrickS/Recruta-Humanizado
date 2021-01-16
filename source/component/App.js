import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from './FirstScreen'
import LoginScreen from './LoginScreen'
import PerfilFirstScreen from './PerfilFirstScreen'
import PerfilSecondScreen from './PerfilSecondScreen'
import PerfilThirdScreen from './PerfilThirdScreen'
import PerfilFourthScreen from './PerfilFourthScreen'
import PerfilFifthScreen from './PerfilFifthScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PerfilFifthScreen' headerMode='none'>
        <Stack.Screen name='FirstScreen' component={FirstScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='PerfilFirstScreen' component={PerfilFirstScreen} />
        <Stack.Screen name='PerfilSecondScreen' component={PerfilSecondScreen} />
        <Stack.Screen name='PerfilThirdScreen' component={PerfilThirdScreen} />
        <Stack.Screen name='PerfilFourthScreen' component={PerfilFourthScreen} />
        <Stack.Screen name='PerfilFifthScreen' component={PerfilFifthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;