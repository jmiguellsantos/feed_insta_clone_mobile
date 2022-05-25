import React from 'react';
import createStackNavigator from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import Feed from './pages/Feed';

const Stack = createStackNavigator();

export default function Routes() {
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
    <Stack.Navigator>
      <Stack.Screen name="Instagram" component={Feed} />
    </Stack.Navigator>
    ;
  </>;
}
