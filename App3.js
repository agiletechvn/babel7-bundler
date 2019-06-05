/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions =
  'Business 3 is dependent on react-navigation when it is packaged. Here is an example of a business package that relies on third-party modules.';

type Props = {};
export class App3_1 extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.push('App3_2')}>
          <Text style={[styles.navBtn]}>Navigate to js page 2</Text>
        </TouchableOpacity>
        <Text style={styles.welcome}>
          Welcome to the world of Business 3 Page 1!
        </Text>
        <Text style={styles.instructions}>To get started, edit App31.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

export class App3_2 extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the world of Business 3 Page 2!
        </Text>
        <Text style={styles.instructions}>To get started, edit App32.js</Text>
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
  },
  navBtn: {
    fontSize: 20,
    textAlign: 'center',
    margin: 40,
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 6
  }
});
