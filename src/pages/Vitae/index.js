import React from 'react'
import {View, Text, Button} from 'react-native'

export default function Vitae({navigation}) {
    return(
        <View>
            <Text>Olá!</Text>
            <Button
            title="Sobre"
            onPress={ () => navigation.navigate('Sobre')}/>
        </View>
    );
}