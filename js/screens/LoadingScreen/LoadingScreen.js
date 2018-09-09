import React, { Component } from 'react';
import { Button, Text, Image, TouchableHighlight } from 'react-native';

class LoadingScreen extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate('Home')}
        style={mainStyle}
      >
        <Image source={require('../../assets/loading-screen.png')} />
      </TouchableHighlight>
    );
  }
}

export default LoadingScreen;

const mainStyle = {
  width: '100%',
  height: '100%',
  alignItems: 'center'
};
