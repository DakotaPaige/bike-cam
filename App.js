import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import RootStackNavigator from './js/navigation/RootStackNavigator';

export default class App extends Component {
  render() {
    return <RootStackNavigator />;
  }
}
