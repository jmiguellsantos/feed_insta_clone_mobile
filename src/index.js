import 'react-native-gesture-handler';
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './pages/Feed';
import VitaeSobre from './pages/VitaeSobre';

const Stack = createStackNavigator();

function LogoTitle() {
  return <Image style={{ width: 100 }} source={require('./assets/instagram.png')} />;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Curriculum"
        screenOptions={{
          headerTitle: props => <LogoTitle {...props} />,
        }}
      >
        <Stack.Screen
          name="Curriculum"
          component={Feed}
          options={{
            title: 'My profile',
          }}
        />
        <Stack.Screen
          name="Sobre"
          component={VitaeSobre}
          oprtions={{
            title: 'About',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
