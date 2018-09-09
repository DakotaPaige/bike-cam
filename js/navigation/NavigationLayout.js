import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Text } from 'react-native';

import SignInPage from '../screens/Login';
import HomePage from '../screens/Home';
import AuthLoadingContainer from '../screens/AuthLoading';
import CameraScreen from '../screens/Camera';
import LoadingScreen from '../screens/LoadingScreen';

const appStack = createStackNavigator(
  {
    Home: HomePage,
    Camera: CameraScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitle: <Text>APP</Text>,
      headerTitleStyle: {
        color: 'white'
      },
      headerStyle: {
        backgroundColor: 'white',
        height: 50
      },
      headerMode: 'screen'
    })
  }
);

const authSwitch = createStackNavigator({
  SignIn: SignInPage
});

export default createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: appStack
  },
  {
    initialRouteName: 'Loading'
  }
);
