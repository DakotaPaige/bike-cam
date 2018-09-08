import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import SignInPage from '../screens/Login';
import HomePage from '../screens/Home';
import AuthLoadingContainer from '../screens/AuthLoading';

const appStack = createStackNavigator({
  Home: HomePage
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
