/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import { StackNavigator,} from 'react-navigation';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainButton from './components/MainButton'
import NavBar from './components/NavBar'
import HomeScreen from './screens/HomeScreen'
import AnotherScreen from './screens/AnotherScreen'

/*
const App = StackNavigator({
  Home: { screen: HomeScreen },
  //Profile: { screen: ProfileScreen },
});
*/
const Stack = createStackNavigator();

/*
const App: () => Node = () => {
  return (
    <View>
      <NavBar/>
      <Text>hello im bipio</Text>
    </View>
  );
};
*/

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Another" component={AnotherScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
