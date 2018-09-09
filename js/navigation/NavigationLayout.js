import React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { Text, Image } from 'react-native';

import SignInPage from '../screens/Login';
import HomePage from '../screens/Home';
import AuthLoadingContainer from '../screens/AuthLoading';
import CameraScreen from '../screens/Camera';
import LoadingScreen from '../screens/LoadingScreen';
import Rewards from '../screens/Rewards';
import Profile from '../screens/Profile';
import Trips from '../screens/Trips';

import BannerImage from '../assets/bikewell-logologofull.png';

const homeStack = createStackNavigator(
  {
    Home: HomePage,
    Camera: CameraScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <Image
          source={BannerImage}
          style={{ width: 100, height: 50 }}
          resizeMode="contain"
        />
      ),
      headerTitleStyle: {
        color: 'white'
      },
      headerStyle: {
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: 'white'
      },
      headerTransparent: true,
      headerMode: 'screen'
    })
  }
);

const profileStack = createStackNavigator({
  Profile
});
const rewardsStack = createStackNavigator({
  Rewards
});
const tripStack = createStackNavigator({
  Trips
});

const appStack = createBottomTabNavigator(
  {
    Home: homeStack,
    Profile: profileStack,
    Rewards: rewardsStack,
    Trips: tripStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          return <Image source={require('../assets/Home.png')} />;
        } else if (routeName === 'Profile') {
          return <Image source={require('../assets/Profile.png')} />;
        } else if (routeName === 'Rewards') {
          return <Image source={require('../assets/Star.png')} />;
        } else if (routeName === 'Trips') {
          return <Image source={require('../assets/trip.png')} />;
        }
        return <Text>H</Text>;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'black',
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: 'grey',
        borderTopColor: 'black',
        borderTopWidth: 1
      }
    }
  }
);

const authSwitch = createStackNavigator(
  {
    SignIn: SignInPage
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen'
    })
  }
);

export default createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: appStack
  },
  {
    initialRouteName: 'Loading'
  }
);
