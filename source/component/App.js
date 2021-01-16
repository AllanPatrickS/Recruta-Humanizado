import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from './FirstScreen'
import LoadingScreen from './LoadingScreen'
import PerfilFirstScreen from './PerfilFirstScreen'
import PerfilSecondScreen from './PerfilSecondScreen'
import PerfilThirdScreen from './PerfilThirdScreen'
import PerfilFourthScreen from './PerfilFourthScreen'
import PerfilFifthScreen from './PerfilFifthScreen'
import PerfilConclusionScreen from './PerfilConclusionScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PerfilConclusionScreen' headerMode='none'>
        <Stack.Screen name='FirstScreen' component={FirstScreen} />
        <Stack.Screen name='LoadingScreen' component={LoadingScreen} />
        <Stack.Screen name='PerfilFirstScreen' component={PerfilFirstScreen} />
        <Stack.Screen name='PerfilSecondScreen' component={PerfilSecondScreen} />
        <Stack.Screen name='PerfilThirdScreen' component={PerfilThirdScreen} />
        <Stack.Screen name='PerfilFourthScreen' component={PerfilFourthScreen} />
        <Stack.Screen name='PerfilFifthScreen' component={PerfilFifthScreen} />
        <Stack.Screen name='PerfilConclusionScreen' component={PerfilConclusionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;