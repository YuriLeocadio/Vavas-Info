import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/screens/Welcome';
import AgentTypes from './src/screens/AgentTypes';
import AgentsList from './src/screens/AgentsList';
import AgentDetails from './src/screens/AgentDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Tipos de Agentes' component={AgentTypes} />
        <Stack.Screen name='Lista de Agentes' component={AgentsList} />
        <Stack.Screen name='Detalhes do Agente' component={AgentDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
