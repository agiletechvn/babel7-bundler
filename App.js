/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = 'Service 1 sets a global variable for service 2 to read';

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    global.buz1Param =
      'Hello Business 2, I am Business 1, we are in the same js environment';
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to the world of business 1!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
