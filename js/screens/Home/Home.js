import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

class Home extends Component {
  render() {
    return (
      <View>
        <AnimatedCircularProgress
          size={120}
          width={2}
          fill={80}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875"
        >
          {fill => <Text>80</Text>}
        </AnimatedCircularProgress>
        <View>
          <Text>21</Text>
          <Text>0</Text>
          <Text>21</Text>
        </View>
        <Button
          title="Open Camera"
          onPress={() => this.props.navigation.navigate('Camera')}
        />
      </View>
    );
  }
}

export default Home;
