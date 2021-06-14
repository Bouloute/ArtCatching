import React, { Component } from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

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
              <Image 
                  source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
                  style={styles.tinyLogo}
              />
                <Text style={{ justifyContent: 'center'}}> Hello its me Bipo </Text>
            </View>
        )
    }
}
