import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import SignInPage from '../screens/Login';
import HomePage from '../screens/Home';
import AuthLoadingContainer from '../screens/AuthLoading';
import CameraScreen from '../screens/Camera';

const appStack = createStackNavigator({
  Home: HomePage,
  Camera: CameraScreen
});

const authSwitch = createStackNavigator({
  SignIn: SignInPage
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
