import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  CameraRoll
} from 'react-native';
import { RNCamera } from 'react-native-camera';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Text>Waiting</Text>
  </View>
);

class Camera extends Component {
  constructor() {
    super();
    this.state = {
      recording: false,
      processing: false
    };
    this.stopRecording = this.stopRecording.bind(this);
  }

  takeVideo = async function(camera) {
    const options = { quality: 0.5, base64: true };
    this.setState({ recording: true });
    const data = await camera.recordAsync(options);
    console.log(data.uri);
    CameraRoll.saveToCameraRoll(data.uri, 'video');
  };

  stopRecording(camera) {
    camera.stopRecording();
    this.setState({ recording: false });
  }

  render() {
    const { recording, processing } = this.state;
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={
            'We need your permission to use your camera phone'
          }
        >
          {({ camera, status }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center'
                }}
              >
                {recording ? (
                  <TouchableOpacity
                    onPress={() => this.stopRecording(camera)}
                    style={styles.capture}
                  >
                    <Text style={{ fontSize: 14 }}> STOP </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => this.takeVideo(camera)}
                    style={styles.capture}
                  >
                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          }}
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});

export default Camera;
