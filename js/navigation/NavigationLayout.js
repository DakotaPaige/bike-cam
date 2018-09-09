import React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { Text } from 'react-native';

import SignInPage from '../screens/Login';
import HomePage from '../screens/Home';
import AuthLoadingContainer from '../screens/AuthLoading';
import CameraScreen from '../screens/Camera';
import LoadingScreen from '../screens/LoadingScreen';
import Rewards from '../screens/Rewards';
import Profile from '../screens/Profile';
import Trips from '../screens/Trips';

const homeStack = createStackNavigator(
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
          iconName = '';
        } else if (routeName === 'Profile') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'Rewards') {
          iconName = `ios-add${focused ? '' : '-outline'}`;
        } else if (routeName === 'Trips') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
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
