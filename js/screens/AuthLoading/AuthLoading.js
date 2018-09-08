import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import firebase from 'firebase';

class AuthLoadingContainer extends Component {
  componentDidMount() {
    console.log('USER:', firebase.currentUser);
    this.props.navigation.navigate(firebase.currentUser ? 'App' : 'Auth');
  }

  render() {
    return <ActivityIndicator />;
  }
}

export default AuthLoadingContainer;
