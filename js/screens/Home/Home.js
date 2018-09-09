import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button
          title="Open Camera"
          onPress={() => this.props.navigation.navigate('Camera')}
        />
      </View>
    );
  }
}

export default Home;
