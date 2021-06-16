import React, { Component } from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity, Alert, Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 150,
    height: 150,
    margin: 30
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default class MainButton extends Component {
    render() {
        return (
          <Button 
            title={this.props.title + ''} 
            onPress={this.props.onPress}
            color='grey'
          
          >
          </Button>
        )
    }
}
