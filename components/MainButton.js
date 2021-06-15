import React, { Component } from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity, Alert } from 'react-native'

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
            <View>
              <TouchableOpacity onPress={() => Alert.alert(this.props.title)}>
                <Image
                  source={{uri: this.props.src}}
                  style={styles.tinyLogo} 
                />
                <Text 
                  style={{ justifyContent: 'center'}}> 
                  {this.props.title}
                </Text>
              </TouchableOpacity>
            </View>
        )
    }
}
