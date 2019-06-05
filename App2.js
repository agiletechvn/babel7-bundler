/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions =
  'Service 2 reads the global variable set by Service 1, indicating that multiple business packages are running in the same js environment.';

type Props = {};
export default class App2 extends Component<Props> {
  render() {
    let buz1GlobalParam = global.buz1Param;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {'Welcome to the world of Business 2! Get the greeting of business 1:' +
            buz1GlobalParam}
        </Text>
        <Text style={styles.instructions}>To get started, edit App2.js</Text>
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
