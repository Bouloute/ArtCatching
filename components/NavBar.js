import React, { Component } from 'react'
import { Text, View } from 'react-native'

import NavigationBar from 'react-native-navbar';

const rightButtonConfig = {
  title: 'Login',
  handler: () => alert('wip!'),
};

const leftButtonConfig = {
  title: 'Previous',
  handler: () => alert('wip!'),
};

export default class NavBar extends Component {
    render() {
        return (
            <View>
                <NavigationBar
                    tintColor={'#919191'}
                    title={{
                        title: 'Art Catching',
                    }}
                    rightButton={rightButtonConfig}
                    leftButton={leftButtonConfig}
                />
            </View>
        )
    }
}
