import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function HomeScreen({ navigation })  {
    
        return (
            <View>
                <Text> This is the home page! </Text>
                <Button title="Another Page" onPress={() => {navigation.navigate('Another')}}></Button>
            </View>
        )
    
}