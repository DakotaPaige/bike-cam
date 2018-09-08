import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

const appStack = createStackNavigator({
  Home: HomePage,
  Camera: CameraPage
});

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingContainer,
    App: appStack,
    Auth: authSwitch
  },
  {
    initialRouteName: 'AuthLoading'
  }
);
