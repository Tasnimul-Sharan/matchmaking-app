import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MatchmakingScreen from './screens/MatchmakingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Matchmaking">
        <Stack.Screen name="Matchmaking" component={MatchmakingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
