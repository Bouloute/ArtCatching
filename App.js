import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainButton from './components/MainButton'
import NavBar from './components/NavBar'
import HomeScreen from './screens/HomeScreen'
import AnotherScreen from './screens/AnotherScreen'

const Stack = createStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'grey' },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}  
          options={{
            headerRight: () => (
              <Text
                onPress={() => alert('This is a WIP!')}
                style={{ 
                  fontSize: 20,
                  color: 'white',
                  marginRight: 20
                }}
              > Login
              </Text>
            ),
          }} 
        />
        <Stack.Screen 
          name="Another" 
          component={AnotherScreen}
          options={{
          headerRight: () => (
            <Text
              onPress={() => alert('This is a WIP!')}
              style={{ 
                fontSize: 20,
                color: 'white',
                marginRight: 20
              }}
            > Login
            </Text>
          ),
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
