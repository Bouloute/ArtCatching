import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainButton from '../components/MainButton'

export default function HomeScreen({ navigation })  {
    
    return (
        <View>
            <Text style={{ textAlign: 'center'}}>  Art Catching </Text>
            <MainButton 
                title="Enigmas"
                onPress={() => {navigation.navigate('Enigmas')}}
            />
            <MainButton 
                title="Solved"
                onPress={() => {navigation.navigate('Enigmas')}}
            />
            <MainButton title="About"/>
        </View>
    )
    
}