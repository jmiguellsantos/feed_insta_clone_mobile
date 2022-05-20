import React from 'react'
import { Image } from 'react-native';s
import createStackNavigator from '@react-navigation/stack'

import Vitae from './pages/Vitae'
import logo from './assets/instagram.png'

const Stack = createStackNavigator();

export default function Routes() {
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Vitae} />
    </Stack.Navigator>
}
