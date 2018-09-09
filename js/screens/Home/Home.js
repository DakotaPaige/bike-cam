import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Image
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { getCyclistById } from '../../services/redArtsClient';
import Styles from './styles';
import styles from './styles';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      cyclist: undefined
    };
  }

  async componentDidMount() {
    let cyclist = await getCyclistById(3);
    console.log(cyclist);
    this.setState({ cyclist });
  }

  render() {
    return (
      <View style={styles.content}>
        <ScrollView>
          <AnimatedCircularProgress
            size={160}
            width={2}
            fill={this.state.cyclist ? this.state.cyclist.score : 0}
            tintColor="#00e0ff"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="transparent"
            rotation={0}
            style={styles.activity}
          >
            {fill => (
              <View style={styles.innerText}>
                <Text style={styles.percentage}>
                  {this.state.cyclist ? this.state.cyclist.score : 0}%
                </Text>
                <Text style={styles.average}>Average Score</Text>
              </View>
            )}
          </AnimatedCircularProgress>
          <View style={styles.contentBlock}>
            <View style={styles.data}>
              <Image
                source={require('../../assets/trip-yellow.png')}
                style={logoStyles}
                resizeMode="contain"
              />
              <Text>21</Text>
              <Text>Trips</Text>
            </View>
            <View style={styles.data}>
              <Image
                source={require('../../assets/Weather.png')}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
              <Text>0</Text>
              <Text>Collisions</Text>
            </View>
            <View style={styles.data}>
              <Image
                source={require('../../assets/Pin.png')}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
              <Text>21</Text>
              <Text>Total kms</Text>
            </View>
          </View>
          <View style={styles.tripInfo}>
            <View style={styles.tripInfoHeader}>
              <Text>Last trip:</Text>
              <Text>Video</Text>
            </View>
            <View style={styles.lastTripInfo}>
              <AnimatedCircularProgress
                size={80}
                width={2}
                fill={79}
                tintColor="#00e0ff"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875"
                rotation={0}
                style={styles.lastTripMonitor}
              >
                {fill => <Text>79</Text>}
              </AnimatedCircularProgress>
              <View>
                <Text>Date:</Text>
                <Text>Time:</Text>
                <Text>Distance:</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('Camera')}
          style={styles.cameraButton}
        >
          <Text style={styles.buttonText}>Open Camera</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Home;

const logoStyles = {
  width: 25,
  height: 25
};
