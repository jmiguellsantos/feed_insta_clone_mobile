import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';

import Vitae from './pages/Vitae';
import VitaeSobre from './pages/VitaeSobre';

const Stack = createStackNavigator({

});

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator 
     initialRouteName="Curriculum"
     screenOptions= {{
       headerMode: 'screen',
       headerTintColor: 'white',
       headerStyle: {backgroundColor: 'tomato'},
     }}
     > 
       <Stack.Screen 
       name="Curriculum" 
       component={Vitae}
       options={{
         title: 'My profile',
       }}
       />
       <Stack.Screen
       name="Sobre"
       component={VitaeSobre}
       oprtions={{
         title: 'About'
       }}
       />
     </Stack.Navigator>

    </NavigationContainer>

  )
}


