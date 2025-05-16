import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './Home';
import Exercicio1 from './Exercicio1';
import Exercicio2 from './Exercicio2';
import Exercicio3 from './Exercicio3';
import Exercicio4 from './Exercicio4';
import Exercicio5 from './Exercicio5';
import Exercicio6 from './Exercicio6';
import Exercicio7 from './Exercicio7';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Exercicio1" component={Exercicio1} />
          <Stack.Screen name="Exercicio2" component={Exercicio2} />
          <Stack.Screen name="Exercicio3" component={Exercicio3} />
          <Stack.Screen name="Exercicio4" component={Exercicio4} />
          <Stack.Screen name="Exercicio5" component={Exercicio5} />
          <Stack.Screen name="Exercicio6" component={Exercicio6} />
          <Stack.Screen name="Exercicio7" component={Exercicio7} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}