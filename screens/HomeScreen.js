import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainButton from '../components/MainButton'

export default function HomeScreen({ navigation })  {
    
    return (
        <View>
            <Text> This is the home page! </Text>
            <Button title="Another Page" onPress={() => {navigation.navigate('Another')}}></Button>
            <View style={{flexDirection: "row", justifyContent: 'center',}}>
                <MainButton 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==" 
                    title="Hello"
                />
                <MainButton />
            </View>
            <View style={{flexDirection: "row", justifyContent: 'center',}}>
                <MainButton />
                <MainButton />
            </View>
        </View>
    )
    
}