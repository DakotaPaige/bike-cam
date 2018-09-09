import React, { Component } from 'react';
import { Button, Text } from 'react-native';

class LoadingScreen extends Component {
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Home')}
        title="GO"
      />
    );
  }
}

export default LoadingScreen;
